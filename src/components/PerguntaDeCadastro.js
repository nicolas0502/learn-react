import "./PerguntaDeCadastro.css"
import Usua from "../assets/icons/usua.svg"
import { Link, useNavigate } from "react-router-dom"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const PerguntaDeCadastro = () => {

    const navigate = useNavigate()

    return (
        <>
        <ArrowLeft onClick={() => (navigate("/"))} className="arrow_left_produto"/>
        <div className="card_pergunta">
            <h1>Você Quer Ser Um Vendedor Ou Um Cliente?</h1>
            <div className="respostas">
                <div className="op_vend"> 
                    <div className="resposta">
                        <img src={Usua} alt="imagem do vendedor"/>
                        <h2>Vendedor</h2>
                    </div>
                    <Link to="/cadastra-vendedor">Se Cadastrar Como Vendedor</Link>
                </div>
                <div className="op_usua">
                    <div className="resposta">
                        <img src={Usua} alt="imagem do usuario"/>
                        <h2>Cliente</h2>
                    </div>
                    <Link to="/cadastra-usuario">Se Cadastrar Como Cliente</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default PerguntaDeCadastro