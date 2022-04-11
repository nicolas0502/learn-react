import "./Card.css"
import Compra from "../assets/icons/compra.svg"

const Card = () => {
    return (
        <div className="compra">
            <img src={Compra} className="card"/>
            <div className="contador">1</div>
        </div>
    )
}

export default Card