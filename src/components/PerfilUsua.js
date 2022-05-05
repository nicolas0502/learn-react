import "./PerfilUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import { useNavigate } from 'react-router-dom'
import {MdModeEditOutline as EditUsua} from 'react-icons/md'

const PerfilUsua = () => {

    let navigate = useNavigate();

    return (
        <div className="usua_card">
            <div className="info_usua">
                <img src={FotoUsua} alt="Foto de Usuario" className="foto_usua" />
                <div className="informacoes">
                    <h1>Nicolas Sousa de Moraes</h1>
                    <h1>nicolas@gmail.com</h1>
                    <h1>XXX.XXX.XXX-XX</h1>
                    <h1>(XX)XXXXX-XXXX</h1>
                </div>
                <div className="editusua1">
                    <EditUsua className="editusua" />
                </div>
            </div>
            <button className="buttonusua" onClick={() => {navigate('/carrinho')}}>Ir para o carrinho</button>
        </div>    
    )
}

export default PerfilUsua