import "./PerfilAdm.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import CardHq from "./CardHqAdm"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditAdm} from 'react-icons/md'
import {  FaPowerOff } from 'react-icons/fa'
import { useAuth } from '../providers/AuthProvider'
import { useUserDados } from "../providers/UserProvider"



const PerfilAdm = () => {

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
        <>
        <div className="adm_card">
            <div className="info_adm">
                <img src={FotoUsua} alt="Foto de perfil do administrador" className="foto_adm" />
                <div className="informacoes">
                    <h1>{userDados.nome} {userDados.sobrenome}</h1>
                    <h1>{userLogged.email}</h1>
                    <h1>{userDados.cpf}</h1>
                    <h1>{userDados.telefone}</h1>
                </div>
                <div className="editadm1">
                    <EditAdm className="editadm" onClick={ () => {navigate("edit-admin")}} />
                    <FaPowerOff  className="logout" onClick={logout}/>
                </div>
                
            </div>
        </div>    
        <div className="produ_adc">
            <h1>Produtos Adicionados</h1>
            <CardHq />
            <button className="buttonproduct" onClick={ () => {navigate("cadastra-hq")}}>Adicionar o Produto</button> 
        </div>
    </>
    )
}

export default PerfilAdm