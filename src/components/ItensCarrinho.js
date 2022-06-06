import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ItensCarrinho.css"

const ItensCarrinho = () => {
    const [hqs, setHqs] = useState(null);
    const [count, setCount] = useState(1);
    const navigate = useNavigate()


    useEffect(() => {
        const carrinhodata = localStorage.getItem('carrinhoItens')
		const carrinho = JSON.parse(carrinhodata)
        const strigItens = carrinho.join(',')
        fetch("http://localhost/LP2/api/hq/select-by-ids/?id="+strigItens)
            .then((response) => response.json())
            .then((data) => {setHqs(data)});
    }, []);

    function addNumber(){
        setCount(count + 1);
        console.log(count);
    }

    function removeNumber(){
        setCount(count - 1);
        console.log(count);
    }



  return (
    <div className='itenzinho'>
        <div className='iteem'>
        {hqs &&
            hqs.map((hq) => {
                return(
                    <div className='item-carrinho' key={hq.id}>
                        <div className='item-imagem'>{hq.imagem}</div>
                        <div className='item-n-p'>
                            <div className="item-nome">{hq.nome}</div>
                            <div className='item-parcela'>Em 10x de R${((hq.valor / 10).toString().replace(".", ","))} sem juros</div>
                        </div>
                        <div className='item-add-quantidade'>
                            <div className="number-input">
                                <button onClick={() => removeNumber()} ></button>
                                <input className="quantity" min="0" name="quantity" defaultValue={count} type="number" />
                                <button onClick={() => addNumber()} className="plus"></button>
                            </div>
                            <div className='item-quantidade'>
                                {hq.quantidade} Unidades
                            </div>
                        </div>
                        <div className='item-valor'>R${((hq.valor).toString().replace(".", ","))}</div>
                    </div>          
                )
            })
        }
        </div>
        <div>
            <div className='valor_total'>
                <p>
                    Valor Total
                </p>
                <p>
                    R$asdadasdasd
                </p>
            </div>
            <div className='buy_now'>
                <button className="button_buy_now" onClick={() => {navigate('/pagamento')}}>Comprar Agora</button>
            </div>
        </div>
    </div>
  )
}

export default ItensCarrinho