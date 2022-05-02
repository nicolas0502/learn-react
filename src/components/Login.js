import "./Login.css"
import Entrar from "../assets/icons/entrar.svg"
import Cadastrar from "../assets/icons/cadastrar.svg"
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div className="usuario">
            <Link to="/login-usuario-ou-vendedor"><img src={Entrar} alt="Botao Para Logar" className="entrar" /></Link>
            <Link to="/cadastro-usuario-ou-vendedor"><img src={Cadastrar} alt="Botao Para Cadastro" className="cadastrar" /></Link>
        </div>
    )
}

export default Login