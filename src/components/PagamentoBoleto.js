import Copiar from "../assets/icons/copiar.svg"
import Check from "../assets/icons/checkmark-circle-2.svg"
import Setinha from "../assets/icons/Vector.svg"
import BoletoLogo from "../assets/icons/simbulo_boleto.png"
import QrBoleto from "../assets/img/boleto.png"
import "./PagamentoBoleto.css"
import { useNavigate } from "react-router-dom"

const PagementoBoleto = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className="boletopag">
      <div className="pag_boleto">     
          <div className="começo">
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
          <div className="boleto_meio">
              <button><img src={Copiar} alt="Verificado" /><span>Copiar código Pix</span></button>
              <img src={QrBoleto} alt="Verificado" />
              <img src={BoletoLogo} alt="Verificado" />
          </div>
          <button className="concluir_pag" onClick={() => navigate("/")}><span>Já fiz meu pagamento</span><img src={Setinha} alt="Verificado" /></button>
      </div>
    </div>
    </>
  )
}

export default PagementoBoleto