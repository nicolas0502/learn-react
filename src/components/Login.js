import "./Login.css"
import Entrar from "../assets/icons/entrar.svg"
import Cadastrar from "../assets/icons/cadastrar.svg"
import { Link } from "react-router-dom"
import { useAuth } from '../providers/AuthProvider'

const Login = () => {
    const {isLogged, userLogged} = useAuth();

    function Userhandle() {
        if(userLogged.tipo === "cliente"){
            return(
                <span>
                    <Link to="/perfil-usuario">{userLogged.email}</Link>
                </span>
            )

        }else{
            return(
                <span>
                    <Link to="/perfil-vendedor">{userLogged.email}</Link>
                </span>
            )
   
        }
    }

    return (
        <div className="usuario">
           { isLogged
                ? (
                    <>
                        {Userhandle()}
                    </>
                )
                : ( 
                    <>
                        <Link to="/login-usuario-ou-vendedor"><img src={Entrar} alt="Botao Para Logar" className="entrar" /></Link>
                        <Link to="/cadastro-usuario-ou-vendedor"><img src={Cadastrar} alt="Botao Para Cadastro" className="cadastrar" /></Link>
                    </>
                    )
              }
        </div>
    )
}

export default Login