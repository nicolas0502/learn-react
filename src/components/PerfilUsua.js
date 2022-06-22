import "./PerfilUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditUsua} from 'react-icons/md'
import {  RiLogoutBoxLine } from 'react-icons/ri'
import { useAuth } from '../providers/AuthProvider'
import { useUserDados } from "../providers/UserProvider"
import ModalAlerts from "./ModalAlerts"
import { useState } from "react"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const PerfilUsua = () => {

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

    function goBack() {
        window.history.back()
    }

    return (
        <>
        { isLoading ? (<p className="carregando">Loading...</p>) : (
            <>
            <ArrowLeft onClick={() => {goBack()}} className="arrow_left_produto"/>
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
                <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
            </div>    
            </>
        )}
        </>
        
    )
}

export default PerfilUsua