import "./LoginVendedor.css"

const LoginVendedor = () => {
  return (
    <div className="login_vend">
        <div className="left_vend">
          <h1>Fazer Login</h1>
          <form className="form_login_usua">
            <label for="email">Email:</label><input type="email" name="nome"/>
            <label for="senha">Senha:</label><input type="password" name="sobrenome"/>
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