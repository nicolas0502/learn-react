import "./PerguntaDeLogin.css"
import Usua from "../assets/icons/usua.svg"

const PerguntaDeLogin = () => {
    return (
        <div className="card_pergunta">
            <h1>Você quer ser um Vendedor ou um Usuário?</h1>
            <div className="respostas">
                <div className="op_vend"> 
                    <div className="resposta">
                        <img src={Usua} alt="imagem do vendedor"/>
                        <h2>Vendedor</h2>
                    </div>
                    <a href="www.google.com">Cadastrar como Vendedor</a>
                </div>
                <div className="op_usua">
                    <div className="resposta">
                        <img src={Usua} alt="imagem do usuario"/>
                        <h2>Usuário</h2>
                    </div>
                    <a href="www.google.com">Cadastrar como Usuário</a>
                </div>
            </div>
        </div>
    )
}

export default PerguntaDeLogin