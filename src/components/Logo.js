import "./Logo.css"
import logo from "../assets/icons/logo.svg"

const Logo = () => {
    return (
       <div>
            <a href="" className="logo">
                <img src={logo} alt="Logo" className="img"/>
                <h1>Library HQs</h1>
            </a>
       </div> 
    )
}

export default Logo