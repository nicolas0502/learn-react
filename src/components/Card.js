import "./Card.css"
import Compra from "../assets/icons/compra.svg"
import {Link} from "react-router-dom"
import { useCarrinho } from "../providers/CarrinhoProvider"
import { useAuth } from "../providers/AuthProvider"
import { useEffect, useState } from "react"

const Card = () => {
    const {idItens} = useCarrinho()
    const {isLogged} = useAuth()
    const [contador, setContador] = useState()

    useEffect(() => {
        setContador(idItens.length)
    }, [idItens])

    function userLogado() {
        if(isLogged){
            return(  
                <>
                <Link to="/carrinho"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
                <div className="contador">{contador}</div>
                </>
            )
        }else{
            return (
                <>
                <Link to="/login-usuario-ou-vendedor"><img src={Compra} alt="Carrinho de compra" className="card"/></Link>
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