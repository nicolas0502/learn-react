import Copiar from "../assets/icons/copiar.svg"
import Check from "../assets/icons/verificado.svg"
import Setinha from "../assets/icons/setinha.svg"
import PixLogo from "../assets/icons/logo_pix.png"
import Qrpix from "../assets/img/qr_pix.png"
import "./PagamentoPix.css"
import { useNavigate } from "react-router-dom"

const PagamentoPix = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className="pag_pix">
        <div className="comeco">
            <img src={Check} alt="Verificado" className="veri"/>
            <div className="men">
                <h1>
                    Pedido Gerado!
                </h1>
                <h2>
                    Agora Só Precisa Finalizar o Pagamento.
                </h2>
            </div>
        </div>
        <div className="pix_meio">
            <button><img src={Copiar} alt="Verificado" /><span>Copiar código Pix</span></button>
            <img src={Qrpix} alt="Verificado" />
            <img src={PixLogo} alt="Verificado" />
        </div>
        <button className="concluir-pag" onClick={() => navigate("/")}><span>Já fiz meu pagamento</span><img src={Setinha} alt="Verificado" /></button>
    </div>
    </>
  )
}

export default PagamentoPix