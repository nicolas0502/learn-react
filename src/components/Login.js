import "./Login.css"
import Entrar from "../assets/icons/entrar.svg"
import Cadastrar from "../assets/icons/cadastrar.svg"


const Login = () => {
    return (
        <div className="usuario">
            <a href=""><img src={Entrar} alt="Botao Para Logar" className="entrar" /></a>
            <a href=""><img src={Cadastrar} alt="Botao Para Cadastro" className="cadastrar" /></a>
        </div>
    )
}

export default Login