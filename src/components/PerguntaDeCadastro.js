import "./PerguntaDeCadastro.css"
import Usua from "../assets/icons/usua.svg"
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const PerguntaDeCadastro = () => {
    return (
        <>
        <div className="card_pergunta">
            <h1>Você quer ser um Vendedor ou um Usuário?</h1>
            <div className="respostas">
                <div className="op_vend"> 
                    <div className="resposta">
                        <img src={Usua} alt="imagem do vendedor"/>
                        <h2>Vendedor</h2>
                    </div>
                    <Link to="/cadastra-vendedor">Cadastrar como Vendedor</Link>
                </div>
                <div className="op_usua">
                    <div className="resposta">
                        <img src={Usua} alt="imagem do usuario"/>
                        <h2>Usuário</h2>
                    </div>
                    <Link to="/cadastra-usuario">Cadastrar como Usuário</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default PerguntaDeCadastro