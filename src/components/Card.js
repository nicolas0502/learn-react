import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"
import { useCarrinho } from "../providers/CarrinhoProvider"
// import Produto from "./Produto"

const Card = () => {
    const {idItens} = useCarrinho()

    return (
        <div className="compra">
            <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
            <div className="contador">{idItens.length}</div>
        </div>
    )
}

export default Card