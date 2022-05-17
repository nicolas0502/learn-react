import "./LoginUsuario.css"
import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Google from "../assets/icons/google.png"

const LoginUsuario = () => {
  return (
    <div className="login_usua">
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
            <form className="form_login_usua">
              <label for="email">Email:</label><input type="email" name="email"/>
              <label for="senha">Senha:</label><input type="password" name="senha"/>
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