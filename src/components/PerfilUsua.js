import "./PerfilUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditUsua} from 'react-icons/md'
import {  FaPowerOff } from 'react-icons/fa'
import { useAuth } from '../providers/AuthProvider'
import { useUserDados } from "../providers/UserProvider"

const PerfilUsua = () => {

    const navigate = useNavigate();

    const {setIsLogged, setUserLogged, userLogged} = useAuth();
    const {userDados} = useUserDados()

    const logout = () => {
        setIsLogged(false)
        setUserLogged({})
        localStorage.removeItem('userLogged')
        localStorage.removeItem('carrinhoItens')
        alert('Deslogado com sucesso')
        navigate('/')
      }

    return (
        <div className="usua_card">
            <div className="info_usua">
                <img src={FotoUsua} alt="Foto de Usuario" className="foto_usua" />
                <div className="informacoes">
                <h1>{userDados.nome} {userDados.sobrenome}</h1>
                    <h1>{userLogged.email}</h1>
                    <h1>{userDados.cpf}</h1>
                    <h1>{userDados.telefone}</h1>
                </div>
                <div className="editusua1">
                    <EditUsua className="editusua" onClick={ () => {navigate("/edit-usuario")}} />
                    <FaPowerOff  className="logout" onClick={logout}/>
                </div>
            </div>
            <button className="buttonusua" onClick={() => {navigate('/carrinho')}}>Ir para o carrinho</button>
        </div>    
    )
}

export default PerfilUsua