import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"

const Card = () => {
    return (
        <div className="compra">
            <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
            <div className="contador">1</div>
        </div>
    )
}

export default Card