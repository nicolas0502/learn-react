import "./PerguntaDeLogin.css"
import Usua from "../assets/icons/usua.svg"
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const PerguntaDeLogin = () => {

    function goBack() {
        window.history.back()
    }

    return (
        <>
        <ArrowLeft onClick={() => {goBack()}} className="arrow_left_produto"/>
        <div className="card_pergunta">
            <h1>Você é um Vendedor ou um Usuário?</h1>
            <div className="respostas">
                <div className="op_vend"> 
                    <div className="resposta">
                        <img src={Usua} alt="imagem do vendedor"/>
                        <h2>Vendedor</h2>
                    </div>
                    <Link to="/login-vendedor">Entrar como Vendedor</Link>
                </div>
                <div className="op_usua">
                    <div className="resposta">
                        <img src={Usua} alt="imagem do usuario"/>
                        <h2>Usuário</h2>
                    </div>
                    <Link to="/login-usuario">Entrar como Usuário</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default PerguntaDeLogin