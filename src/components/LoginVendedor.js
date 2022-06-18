import "./LoginVendedor.css"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";
import ModalAlerts from "./ModalAlerts";

const LoginVendedor = () => {

  const emailRef = useRef();
  const senhaRef = useRef();

  const { setIsLogged, setUserLogged} = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [nav, setNav] = useState("");

  useEffect(() => {
    emailRef.current.focus()
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('email', event.target[0].value);
    formData.append('senha', event.target[1].value);
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
                setMessage("O Usuário Foi Logado Com Sucesso")
                setTitle("Sucesso ao Logar")
                setNav("/")
            } else {
                let data = await response.json()
                setModalShow(true)
                setMessage(data.message)
                setTitle("Erro ao Logar")
            }
      })
  } 
  
  const onHide = () => {
    setModalShow(false)
    navigate(nav)
  }
  
  return (
  <div className="login_vend">
      <ArrowLeft onClick={() => {navigate("/login-usuario-ou-vendedor")}} className="arrow_left_produto"/>
      <div className="left_vend">
        <h1>Fazer Login</h1>
        <form className="form_login_usua" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="email">Email:</label><input type="email" name="email" ref={emailRef}/>
          <label htmlFor="senha">Senha:</label><input type="password" name="senha" ref={senhaRef}/>
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