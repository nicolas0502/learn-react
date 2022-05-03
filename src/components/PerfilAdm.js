import "./PerfilAdm.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import Editar from "../assets/icons/editar.svg"
import CardHq from "./CardHq"
import { useNavigate } from 'react-router-dom'


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
                <a href="www.google.com"><img src={Editar} alt="Botão para editar o usuario" className="editar" /></a>
            </div>
        </div>    
        <div className="produ_adc">
            <h1>Produtos Adicionados</h1>
            <CardHq />
            <button className="buttonproduct" onClick={ () => {navigate("/cadastra-hq")}}>Adicionar o Produto</button> 
        </div>
    </>
    )
}

export default PerfilAdm