import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"
import { useState } from "react"
// import Produto from "./Produto"

const Card = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="compra">
            <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
            <div className="contador">{count}</div>
        </div>
    )
}

export default Card