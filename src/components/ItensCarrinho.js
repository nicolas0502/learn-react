import { useEffect, useState } from 'react'
import "./ItensCarrinho.css"

const ItensCarrinho = () => {
    const [hq, setHq] = useState();
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id=1")
            .then((response) => response.json())
            .then((data) => {setHq(data)});
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
    <>
        {hq ? (
                <div className='item-carrinho'>
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
                    <div className='item-valor'>R${((hq.valor * count).toString().replace(".", ","))}</div>
                </div>            
            )
        : 
            (<p>Hq não encontrado!</p>)
        }
    </>
  )
}

export default ItensCarrinho