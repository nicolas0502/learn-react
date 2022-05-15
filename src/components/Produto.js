import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Produto.css"

const Produto = () => {
    const { hqId } = useParams();
    const [hq, setHq] = useState();

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id="+hqId)
            .then((response) => response.json())
            .then((data) => {setHq(data)
                console.log(data)});
    }, [hqId]);

    const calculo = hq.valor / 10

  return (
    <>
        {hq ? (
            <div className="produto">
                <div className='info'>
                    <div className='produ_imagem'>{hq.imagem}</div>
                    <div className='info_produ'>
                        <h1 className='produ_nome'>{hq.nome}</h1>
                        <div className='produ_valor'>{hq.valor}</div>
                        <div className='produ_parcela'>Em 12x de R${calculo} sem juros</div>
                        <div className='produ_quantidade'>Estoque disponivel de {hq.quantidade} unidades</div>
                        <button> Comprar Agora </button>
                        <button> Adicionar ao Carrinho </button>
                    </div>
                </div>
                <div>
                    <h3>Descrição</h3>
                    <div className='produ_descricao'>{hq.descricao}</div>
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