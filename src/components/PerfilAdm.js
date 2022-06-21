import "./PerfilAdm.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import CardHq from "./CardHqAdm"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditAdm} from 'react-icons/md'
import {  RiLogoutBoxLine } from 'react-icons/ri'
import { useAuth } from '../providers/AuthProvider'
import { useUserDados } from "../providers/UserProvider"
import ModalAlerts from "./ModalAlerts"
import { useState } from "react"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const PerfilAdm = () => {

    const navigate = useNavigate();

    const {setIsLogged, setUserLogged, userLogged} = useAuth();
    const {userDados, isLoading} = useUserDados()
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    let cpfFormat = ""
    let telFormat = ""

    const logout = () => {
        const formData = new FormData();
        formData.append('token', userLogged.token)
        fetch(
            "http://localhost/LP2/api/auth/logout",
            {method: 'POST', body: formData}
          )
          .then(async (response) => {
            if(response.status === 200){
                let data = await response.json()
                setIsLogged(false)
                setUserLogged({})
                localStorage.removeItem('userLogged')
                setModalShow(true)
                setMessage(data.message)
                setTitle("Sessão Encerrada!")
            } else {
                setModalShow(true)
                setMessage("Não Foi Possivel Deslogar!")
                setTitle("Erro ao Delogar!")
            }
        })
    }

    if(!isLoading){
        let cpfNoFormat = userDados.cpf
        let cpfp1 = cpfNoFormat.substring(0,3)
        let cpfp2 = cpfNoFormat.substring(3,6)
        let cpfp3 = cpfNoFormat.substring(6,9)
        let cpfp4 = cpfNoFormat.substring(9,11)
        cpfFormat = cpfp1 + "." + cpfp2 + "." + cpfp3 + "-" + cpfp4

        let telNoFormat = userDados.telefone
        let telp1 = telNoFormat.substring(0,2)
        let telp2 = telNoFormat.substring(2,7)
        let telp3 = telNoFormat.substring(7,11)
        telFormat = "(" + telp1 + ")" + telp2 + "-" + telp3
    }
     

    const onHide = () => {
        setModalShow(false)
        navigate('/')
    }

    
    return (
        <>
        { isLoading ? (<p className="carregando">Loading...</p>) : (
            <>
            <ArrowLeft onClick={() => {navigate("/")}} className="arrow_left_produto"/>
            <div className="adm_card">
            <div className="info_adm">
                <img src={FotoUsua} alt="Foto de perfil do administrador" className="foto_adm" />
                <div className="informacoes">
                    <h1>{userDados.nome} {userDados.sobrenome}</h1>
                    <h1>{userLogged.email}</h1>
                    <h1>{cpfFormat}</h1>
                    <h1>{telFormat}</h1>
                </div>
                <div className="editadm1">
                    <EditAdm className="editadm" onClick={ () => {navigate("/edit-vendedor")}} />
                    <RiLogoutBoxLine  className="logout" onClick={logout}/>
                </div>
                
            </div>
            </div>    
            <div className="produ_adc">
                <h1>Produtos Adicionados</h1>
                <CardHq />
                <button className="buttonproduct" onClick={ () => {navigate("cadastra-hq")}}>Adicionar o Produto</button> 
            </div>
            <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
            </>
        )}
        </>
        
    )
}

export default PerfilAdm