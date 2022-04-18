import "./InfoUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import Editar from "../assets/icons/editar.svg"

const InfoUsua = () => {
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
                <img src={Editar} alt="Botão para editar o usuario" className="editar" />
            </div> 
        </div>    
    )
}

export default InfoUsua