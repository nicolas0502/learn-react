import "./Logo.css"
import logo from "../assets/icons/logo.svg"
import { Link } from "react-router-dom"

const Logo = () => {
    return (
       <Link to="/" className="logo">
            <img src={logo} alt="Logo" className="img"/>
             <h1>Library HQs</h1>
       </Link> 
    )
}

export default Logo