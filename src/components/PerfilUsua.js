import "./PerfilUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditUsua} from 'react-icons/md'
import {  RiLogoutBoxLine } from 'react-icons/ri'
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

    let cpfNoFormat = userDados.cpf
    let cpfp1 = cpfNoFormat.substring(0,3)
    let cpfp2 = cpfNoFormat.substring(3,6)
    let cpfp3 = cpfNoFormat.substring(6,9)
    let cpfp4 = cpfNoFormat.substring(9,11)
    const cpfFormat = cpfp1 + "." + cpfp2 + "." + cpfp3 + "-" + cpfp4

    let telNoFormat = userDados.telefone
    let telp1 = telNoFormat.substring(0,2)
    let telp2 = telNoFormat.substring(2,7)
    let telp3 = telNoFormat.substring(7,11)
    const telFormat = "(" + telp1 + ")" + telp2 + "-" + telp3 

    return (
        <div className="usua_card">
            <div className="info_usua">
                <img src={FotoUsua} alt="Foto de Usuario" className="foto_usua" />
                <div className="informacoes">
                <h1>{userDados.nome} {userDados.sobrenome}</h1>
                    <h1>{userLogged.email}</h1>
                    <h1>{cpfFormat}</h1>
                    <h1>{telFormat}</h1>
                </div>
                <div className="editusua1">
                    <EditUsua className="editusua" onClick={ () => {navigate("/edit-usuario")}} />
                    <RiLogoutBoxLine  className="logout" onClick={logout}/>
                </div>
            </div>
            <button className="buttonusua" onClick={() => {navigate('/carrinho')}}>Ir para o carrinho</button>
        </div>    
    )
}

export default PerfilUsua