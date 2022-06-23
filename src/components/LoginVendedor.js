import "./LoginVendedor.css"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";
import ModalAlerts from "./ModalAlerts";
import {FaEyeSlash, FaEye} from "react-icons/fa"

const LoginVendedor = () => {

  const emailRef = useRef();
  const senhaRef = useRef();

  const { setIsLogged, setUserLogged} = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [nav, setNav] = useState("");
  const [senha, setSenha] = useState("password")

  useEffect(() => {
    emailRef.current.focus()
  }, [emailRef])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('email', event.target[0].value);
    formData.append('senha', event.target[1].value);
    formData.append('tipo',"vendedor")
    fetch(
      "http://localhost/LP2/api/auth/login",
      {method: 'POST', body: formData}
    )
      .then(async (response) => {
            if(response.status === 200){
                let data = await response.json()
                setIsLogged(true)
                setUserLogged(data.session)
                localStorage.setItem('userLogged', JSON.stringify(data.session));
                setModalShow(true)
                setMessage(data.message)
                setTitle("Sucesso ao Logar!")
                setNav("/")
            } else {
                let data = await response.json()
                setModalShow(true)
                setMessage(data.message)
                setTitle("Erro ao Logar!")
                setNav("")
            }
      })
  } 
  
  const onHide = () => {
    setModalShow(false)
    navigate(nav)
  }

  function goBack() {
    window.history.back()
  }

  const Ocult = () => {
    if(senha === "password"){
        return(
            <FaEye onClick={() => {ocultarSenha()}} className="oculta_senha"></FaEye>
        )
    }else{
        return(
            <FaEyeSlash onClick={() => {ocultarSenha()}} className="oculta_senha"></FaEyeSlash>
        )
    }
  }

  const ocultarSenha = () => {
      if(senha === "password"){
          setSenha("text")
      }else{
          setSenha("password")
      }
  }
  
  return (
  <div className="login_vend">
      <ArrowLeft onClick={() => {goBack()}} className="arrow_left_produto"/>
      <div className="left_vend">
        <h1>Fazer Login</h1>
        <form className="form_login_usua" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="email">Email:</label><input type="email" name="email" ref={emailRef}/>
          <label htmlFor="senha">Senha:</label>{Ocult()}<input type={senha} name="senha" ref={senhaRef}/>
          <input type="submit" value="Entrar" className="botao_cadastro"/>
        </form>
      </div>
      <div className="right_vend">
        <p>Seja Bem - Vindo a nossa loja geek onde você encontra todo tipo de Mangas e HQs para a sua diversão.</p>  
      </div>
      <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
  </div>
  )
}

export default LoginVendedor