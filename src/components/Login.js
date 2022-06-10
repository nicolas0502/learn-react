import "./Login.css"
import Entrar from "../assets/icons/entrar.svg"
import Cadastrar from "../assets/icons/cadastrar.svg"
import { Link } from "react-router-dom"
import { useAuth } from '../providers/AuthProvider'
import { FaUserCircle } from "react-icons/fa"
import { useUserDados } from '../providers/UserProvider'

const Login = () => {
    const {isLogged, userLogged} = useAuth();
    const {userDados} = useUserDados();

    function Userhandle() {
        if(userLogged.tipo === "cliente"){
            return(
                <Link to="/perfil-usuario" className="userdados">
                    <FaUserCircle className="icon-user"/>
                    <span className="nome-usuario">{userDados.nome} {userDados.sobrenome}</span>
                </Link>
            )

        }else{
            return(
                <Link className="userdados" to="/perfil-vendedor">
                    <FaUserCircle className="icon-user"/>
                    <span className="nome-usuario">{userDados.nome} {userDados.sobrenome}</span>
                </Link>
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