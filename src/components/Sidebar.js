import React from 'react'
import { Container, Content } from './StylesSidebar'
import { Link } from 'react-router-dom'
import { 
  FaTimes, 
  FaHome,  
  FaUserAlt,  
  FaShoppingCart,
  FaStar
} from 'react-icons/fa'
import SidebarItem from './SidebarItem'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" className='nav-link'><SidebarItem Icon={FaHome} Text="Incio"/></Link>
        <Link to="/carrinho" className='nav-link'><SidebarItem Icon={FaShoppingCart} Text="Carrinho" /></Link>
        <Link to="/favoritos" className='nav-link'><SidebarItem Icon={FaStar} Text="Favoritos" /></Link>
        <Link to="/perfil-vendedor" className='nav-link'><SidebarItem Icon={FaUserAlt} Text="Perfil" /></Link>
      </Content>
    </Container>
  )
}

export default Sidebar