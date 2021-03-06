import "./Header.css"
import Menu from "./Menu"
import Logo from "./Logo"
import Login from "./Login"

const HeaderMenu = () => {
    return (
        <div className= "cabecalho">
            <Menu></Menu>
            <Logo></Logo>
            <Login></Login>
        </div>
    )
}

export default HeaderMenu