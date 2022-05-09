import React from 'react'
import { Container, Content } from './StylesSidebar'
import { 
  FaTimes, 
  FaHome,  
  FaUserAlt,  
  FaShoppingCart
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
        <SidebarItem Icon={FaHome} Text="Incio" />
        <SidebarItem Icon={FaShoppingCart} Text="Carrinho" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
      </Content>
    </Container>
  )
}

export default Sidebar