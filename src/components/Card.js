import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"
import { useCarrinho } from "../provider/CarrinhoProvider"
// import Produto from "./Produto"

const Card = () => {
    const {numItens} = useCarrinho()

    return (
        <div className="compra">
            <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
            <div className="contador">{numItens}</div>
        </div>
    )
}

export default Card