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
import { useState } from "react";
import { useAuth } from '../providers/AuthProvider'
import ModalAlerts from "./ModalAlerts";

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  const navigate = useNavigate()

  const {setIsLogged, setUserLogged, userLogged, isLogged} = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const logout = () => {
    if(isLogged){
      setIsLogged(false)
      setUserLogged({})
      localStorage.removeItem('userLogged')
      localStorage.removeItem('carrinhoItens')
      setTitle("Deslogado")
      setMessage("O usuário foi deslogado com sucesso")
      setModalShow(true)
    }else{
      setTitle("Erro!!")
      setModalShow(true)
      setMessage("O usuário já está deslogado")
    }
  }

  const onHide = () => {
    setModalShow(false)
    navigate('/')
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
    <>
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" className='nav-link'><SidebarItem Icon={FaHome} Text="Incio"/></Link>
        {CardHandle()}
        {Pefilhandle()}
        <div className='nav-link' onClick={logout}><SidebarItem Icon={RiLogoutBoxLine} Text="Sair"/></div>
      </Content>
    </Container>
    <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
    </>

  )
}

export default Sidebar