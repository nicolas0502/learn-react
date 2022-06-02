import "./LoginVendedor.css"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";

const LoginVendedor = () => {

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus()
  })

  const navigate = useNavigate();

  return (
    <div className="login_vend">
        <ArrowLeft onClick={() => {navigate("/login-usuario-ou-vendedor")}} className="arrow_left_produto"/>
        <div className="left_vend">
          <h1>Fazer Login</h1>
          <form className="form_login_usua">
            <label for="email">Email:</label><input type="email" name="email" ref={emailRef}/>
            <label for="senha">Senha:</label><input type="password" name="senha"/>
            <input type="submit" value="Entrar" className="botao_cadastro"/>
          </form>
        </div>
        <div className="right_vend">
          <p>Seja Bem - Vindo a nossa loja geek onde você encontra todo tipo de Mangas e HQs para a sua diversão</p>  
        </div>
    </div>
  )
}

export default LoginVendedor