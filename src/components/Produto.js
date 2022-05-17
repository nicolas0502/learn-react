import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Produto.css"

const Produto = () => {
    const { hqId } = useParams();
    const [hq, setHq] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id="+hqId)
            .then((response) => response.json())
            .then((data) => {setHq(data)
                console.log(data)});
    }, [hqId]);

  return (
    <>
        {hq ? (
            <div className="produto">
                <div className='info'>
                    <div className='produ_imagem'>{hq.imagem}</div>
                    <div className='info_produ'>
                        <h1 className='produ_nome'>{hq.nome}</h1>
                        <div className='valor_parcela'> 
                            <div className='produ_valor'>R$ {hq.valor}</div>
                            <div className='produ_parcela'>Em 10x de R${((hq.valor / 10).toString().replace(".", ","))} sem juros</div>
                        </div>
                        <div className='quantidade_de_produto'>
                            <div className='produ_quantidade'>Estoque disponivel de {hq.quantidade} unidades</div>
                            <div className='quantidade_produ'><label>Quantidade da compra:</label> <input type="number" min="1" max={hq.quantidade} defaultValue="1" name='quantidade'/></div>
                        </div>
                        <div className='butoes'>
                            <button className='buton1' onClick={() => {navigate("pagamento")}} > Comprar Agora </button>
                            <button className='buton2' onClick={() => {navigate("pagamento")}}> Adicionar ao Carrinho </button>
                        </div>
                    </div>
                </div>
                <div className='descricao'>
                    <h3>Descrição:</h3>
                    <div className='produ_descricao'><p>{hq.descricao}</p></div>
                </div>
            </div>
            )
        : 
            (<p>Hq não encontrado!</p>)
        }
        </>
  )
}

export default Produto