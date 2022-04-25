import "./PerfilUsua.css"
import FotoUsua from "../assets/img/foto de usuario.svg"
import Editar from "../assets/icons/editar.svg"

const PerfilUsua = () => {
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
                <a href="www.google.com"><img src={Editar} alt="Botão para editar o usuario" className="editar" /></a>
            </div>
            <a href="www.google.com" className="buttonusua">Ir para o carrinho</a>
        </div>    
    )
}

export default PerfilUsua