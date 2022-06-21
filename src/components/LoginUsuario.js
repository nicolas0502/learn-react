import "./LoginUsuario.css"
import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Google from "../assets/icons/google.png"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";
import ModalAlerts from "./ModalAlerts";

const LoginUsuario = () => {

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
    formData.append('tipo',"cliente")
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
                setNav("/");
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

  return (
    <div className="login_usua">
        <ArrowLeft onClick={() => {navigate("/login-usuario-ou-vendedor")}} className="arrow_left_produto"/>
        <div className="left_usua">
            <h1>Fazer Login</h1>
            <div className="iconsss">
                    <div className="facebook">
                        <img src={Facebook} alt="icone do facebook" />
                        <h3>Facebook</h3>
                    </div>
                    <div className="google">
                        <img src={Google} alt="icone do google" />
                        <h3>Google</h3>
                    </div>
                    <div className="instagram">
                        <img src={Instagram} alt="icone do instagram" />
                        <h3>Instagram</h3>
                    </div>
            </div>
            <form className="form_login_usua" onSubmit={(event) => handleSubmit(event)}>
              <label for="email">Email:</label><input type="email" name="email" ref={emailRef}/>
              <label for="senha">Senha:</label><input type="password" name="senha" ref={senhaRef}/>
              <input type="submit" value="Entrar" className="botao_cadastro"/>
            </form>
        </div>
        <div className="right_usua">
          <p>Seja Bem - Vindo a nossa loja geek onde você encontra todo tipo de Mangas e HQs para a sua diversão.</p>  
        </div>
        <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
    </div>
  )
}

export default LoginUsuario