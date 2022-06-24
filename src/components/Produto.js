import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Produto.css"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useCarrinho, saveCarrinhoLocalStorage } from '../providers/CarrinhoProvider';
import { useAuth } from '../providers/AuthProvider';
import ModalAlerts from "./ModalAlerts"

const Produto = () => {
    const { hqId } = useParams();
    const [hq, setHq] = useState();
    const navigate = useNavigate();
    const { isLogged } = useAuth();
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    
    function goBack() {
        window.history.back()
    }

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id="+hqId)
            .then((response) => response.json())
            .then((data) => {setHq(data)
                console.log(data)});
    }, [hqId]);

    const {idItens, setIdItens} = useCarrinho()

    function addCarrinho(id) {
        if(isLogged) {
            if(idItens.includes(id)){
                setModalShow(true)
                setTitle("Erro Ao Adicionar Produto!")
                setMessage("O Produto Já Está Adicionado Ao Carrinho!")
            }else{
                setIdItens([...idItens, id])
                saveCarrinhoLocalStorage([...idItens, id])
                setModalShow(true)
                setTitle("Adicionado Com Sucesso!")
                setMessage("O Produto Foi Adicionado Ao Carrinho!")
            }
        } else {
            setModalShow(true)
            setTitle("Erro Ao Adicionar Produto!")
            setMessage("Você Precisa Estar Logado Para Adicionar Um Item Ao Carrinho!")
        }       
    }

    function Pagamento(){
        if(isLogged) {
            navigate("/pagamento")
        } else {
            setModalShow(true)
            setTitle("Erro Para Ir Ao Pagamento!")
            setMessage("Você Precisa Estar Logado Para Ir Ao Pagamento!")
        }
    }

  return (
    <>
        {hq ? (
            <div className="produto">
                <ArrowLeft onClick={() => {goBack()}} className="arrow_left"/>
                <div className='info'>
                    <img className='produ_imagem' src={hq.imagem} alt="imagem do produto"/>
                    <div className='info_produ'>
                        <h1 className='produ_nome'>{hq.nome}</h1>
                        <div className='valor_parcela'> 
                            <div className='produ_valor'>R$ {((hq.valor).toString().replace(".", ","))}</div>
                            <div className='produ_parcela'>Em 10x de R${((hq.valor / 10).toString().replace(".", ","))} sem juros</div>
                        </div>
                        <div className='quantidade_de_produto'>
                            <div className='produ_quantidade'>Estoque disponivel de {hq.quantidade} unidades</div>
                            <div className='quantidade_produ'><label>Quantidade da compra:</label> <input type="number" min="1" max={hq.quantidade} defaultValue="1" name='quantidade'/></div>
                        </div>
                        <div className='butoes'>
                            <button className='buton1' onClick={() => Pagamento()} > Comprar Agora </button>
                            <button className='buton2' onClick={() => addCarrinho(hq.id)}> Adicionar ao Carrinho </button>
                        </div>
                    </div>
                </div>
                <div className='descricao'>
                    <h3>Descrição:</h3>
                    <div className='produ_descricao'><p>{hq.descricao}</p></div>
                </div>
                <ModalAlerts show={modalShow} message={message} title={title} onHide={() => setModalShow(false)} />
            </div>
            )
        : 
            (<p>Loading...</p>)
        }
        </>
  )
}

export default Produto