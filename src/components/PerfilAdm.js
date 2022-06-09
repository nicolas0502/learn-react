import "./PerfilAdm.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import CardHq from "./CardHqAdm"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditAdm} from 'react-icons/md'
import {  FaPowerOff } from 'react-icons/fa'
import { useAuth } from '../providers/AuthProvider'



const PerfilAdm = () => {

    const navigate = useNavigate();

    const {setIsLogged, setUserLogged} = useAuth();

    const logout = () => {
        setIsLogged(false)
        setUserLogged({})
        localStorage.removeItem('userLogged')
        alert('Deslogado com sucesso')
        navigate('/')
    }
    
    
    return (
        <>
        <div className="adm_card">
            <div className="info_adm">
                <img src={FotoUsua} alt="Foto de perfil do administrador" className="foto_adm" />
                <div className="informacoes">
                    <h1>Nicolas Sousa de Moraes</h1>
                    <h1>nicolas@gmail.com</h1>
                    <h1>XXX.XXX.XXX-XX</h1>
                    <h1>(XX)XXXXX-XXXX</h1>
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