import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content } from './StylesSidebar'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaShoppingCart
} from 'react-icons/fa'

import SidebarItem from './SidebarItem'

const Sidebar = ({ active }) => {

  let navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Incio" onClick={ () => {navigate("/")}} />
        <SidebarItem Icon={FaShoppingCart} Text="Carrinho" onClick={ () => {navigate("/carrinho")}} />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar