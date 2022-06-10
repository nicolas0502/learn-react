import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"
import { useCarrinho } from "../providers/CarrinhoProvider"
import { useAuth } from "../providers/AuthProvider"

const Card = () => {
    const {idItens} = useCarrinho()
    const {isLogged} = useAuth()

    function userLogado() {
        if(isLogged){
            return(  
                <>
                <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
                <div className="contador">{idItens.length}</div>
                </>
            )
        }else{
            return (
                <>
                <Link to="/login-usuario-ou-vendedor"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
                <div className="contador">{idItens.length}</div>
                </>
            )
        }
    }

    return (
        <div className="compra">
            {userLogado()}
        </div>
    )
}

export default Card