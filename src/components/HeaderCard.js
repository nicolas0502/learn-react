import "./Header.css"
import Card from "./Card"
import Logo from "./Logo"
import Login from "./Login"
import Search from "./Search"

const HeaderCard = () => {
    return (
        <div className="header">
        <div className= "cabecalho">
            <Card></Card>
            <Logo></Logo>
            <Login></Login>
        </div>
        <div className="nav">
            <Search></Search>
        </div>
        </div>
        
    )
}

export default HeaderCard