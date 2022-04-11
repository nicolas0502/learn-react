import "./Logo.css"
import logo from "../assets/icons/logo.svg"

const Logo = () => {
    return (
       <div className="logo">
            <img src={logo} className="img"/>
            <h1>Library HQs</h1>
       </div> 
    )
}

export default Logo