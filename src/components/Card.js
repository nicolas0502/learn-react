import "./Card.css"
import Compra from "../assets/icons/compra.svg"

const Card = () => {
    return (
        <div className="compra">
            <a href=""><img src={Compra} alt="Carrinho de compra" className="card"/></a>
            <div className="contador">1</div>
        </div>
    )
}

export default Card