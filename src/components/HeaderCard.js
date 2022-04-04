import "./Header.css"
import Menu from "./Menu"
import Logo from "./Logo"
import Login from "./Login"

const HeaderCard = () => {
    return (
        <div className= "header">
            <Menu></Menu>
            <Logo></Logo>
            <Login></Login>
        </div>
    )
}

export default HeaderCard