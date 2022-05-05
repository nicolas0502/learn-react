import "./PerfilAdm.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import CardHq from "./CardHq"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditAdm} from 'react-icons/md'


const PerfilAdm = () => {
    let navigate = useNavigate();

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
                    <EditAdm className="editadm" />
                </div>
                
            </div>
        </div>    
        <div className="produ_adc">
            <h1>Produtos Adicionados</h1>
            <div className="cardzin">
                <CardHq />
            </div>
            <button className="buttonproduct" onClick={ () => {navigate("/cadastra-hq")}}>Adicionar o Produto</button> 
        </div>
    </>
    )
}

export default PerfilAdm