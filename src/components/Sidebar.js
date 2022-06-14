import React from 'react'
import { Container, Content } from './StylesSidebar'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaTimes, 
  FaHome,  
  FaUserAlt,  
  FaShoppingCart
} from 'react-icons/fa'
import {  RiLogoutBoxLine } from 'react-icons/ri'
import SidebarItem from './SidebarItem'
import { useAuth } from '../providers/AuthProvider'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  const navigate = useNavigate()

  const {setIsLogged, setUserLogged, userLogged, isLogged} = useAuth();

  const logout = () => {
    if(isLogged){
      setIsLogged(false)
      setUserLogged({})
      localStorage.removeItem('userLogged')
      localStorage.removeItem('carrinhoItens')
      alert('Deslogado com sucesso')
      navigate('/')
    }else{
      alert('Você ja esta deslogado')
    }
  }

  function Pefilhandle() {
    if(isLogged){
        if(userLogged.tipo === "cliente"){
          return(
            <Link to="/perfil-usuario" className='nav-link'><SidebarItem Icon={FaUserAlt} Text="Perfil" /></Link>
          )

        }else{
          return(
            <Link to="/perfil-vendedor" className='nav-link'><SidebarItem Icon={FaUserAlt} Text="Perfil" /></Link>
          )

        }
    }else{
      return(
        <Link to="/login-usuario-ou-vendedor" className='nav-link'><SidebarItem Icon={FaUserAlt} Text="Perfil" /></Link>
      )
    }
  }

  function CardHandle(){
    if(isLogged){
      return(
        <Link to="/carrinho" className='nav-link'><SidebarItem Icon={FaShoppingCart} Text="Carrinho" /></Link>
      )
    }else{
      return(
        <Link to="/login-usuario-ou-vendedor" className='nav-link'><SidebarItem Icon={FaShoppingCart} Text="Carrinho" /></Link>
      )
    }
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" className='nav-link'><SidebarItem Icon={FaHome} Text="Incio"/></Link>
        {CardHandle()}
        {Pefilhandle()}
        <div className='nav-link' onClick={logout}><SidebarItem Icon={RiLogoutBoxLine} Text="Sair"/></div>
      </Content>
    </Container>
  )
}

export default Sidebar