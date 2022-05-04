import "./Menu.css"
import menu from "../assets/icons/menu.svg"
import {useState} from 'react'
import Sidebar from "./Sidebar"

const Menu = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <img src={menu} alt="Menu" className="menu" onClick={showSidebar} />
        {sidebar && <Sidebar active = {setSidebar}/>}
        </>
    )
}

export default Menu