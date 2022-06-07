import "./LoginUsuario.css"
import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Google from "../assets/icons/google.png"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";

const LoginUsuario = () => {

  const emailRef = useRef();
  const senhaRef = useRef();

  const { setIsLogged, setUserLogged} = useAuth();


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
                alert("Cliente logado com sucesso")
                navigate('/');
            } else {
                let data = await response.json()
                data?.message
                    ? alert(data.message)
                    : alert('Erro ao Logar!')
            }
        })
} 

  const navigate = useNavigate();

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
          <p>Seja Bem - Vindo a nossa loja geek onde você encontra todo tipo de Mangas e HQs para a sua diversão</p>  
        </div>
    </div>
  )
}

export default LoginUsuario