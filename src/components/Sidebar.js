import React from 'react'
import { Container, Content } from './StylesSidebar'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaTimes, 
  FaHome,  
  FaUserAlt,  
  FaShoppingCart,
  FaPowerOff
} from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import { useAuth } from '../providers/AuthProvider'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  const navigate = useNavigate()

  const {setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
    alert('Deslogado com sucesso')
    navigate('/')
}

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" className='nav-link'><SidebarItem Icon={FaHome} Text="Incio"/></Link>
        <Link to="/carrinho" className='nav-link'><SidebarItem Icon={FaShoppingCart} Text="Carrinho" /></Link>
        <Link to="/perfil-vendedor" className='nav-link'><SidebarItem Icon={FaUserAlt} Text="Perfil" /></Link>
        <div className='nav-link' onClick={logout}><SidebarItem Icon={FaPowerOff} Text="Sair"/></div>
      </Content>
    </Container>
  )
}

export default Sidebar