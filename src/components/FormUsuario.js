import "./FormUsuario.css"
import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Google from "../assets/icons/google.png"

const FormUsuario = ({clientes, setClientes}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('nome', event.target[0].value);
        formData.append('sobrenome', event.target[1].value);
        formData.append('email', event.target[2].value);
        formData.append('telefone', event.target[3].value);
        formData.append('cpf', event.target[4].value);
        formData.append('nascimento', event.target[5].value);
        formData.append('senha', event.target[6].value);
        fetch(
          "http://localhost/LP2/api/cliente/create",
          {method: 'POST', body: formData}
          )
          .then((response) => response.json())
          .then((data) => {
            alert(data.message)
            setClientes([ data.clientes , ...clientes])
          });
    }



    return (
        <div className="usuario_form">
            <form onSubmit={(event) => handleSubmit(event)} className="form_usuario">
                <h1>Cadastrar cliente</h1>
                <div className="iconss">
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
                <label for="nome">Nome:</label><input type="text" name="nome"/>
                <label for="sobrenome">Sobrenome:</label><input type="text" name="sobrenome"/>
                <label for="email">Email:</label><input type="email" name="email"/>
                <label for="telefone">Telefone:</label><input type="text" name="telefone"/>
                <label for="cpf">CPF:</label><input type="text" name="cpf"/>
                <label for="nascimento">Data de Nascimento:</label><input type="text" name="nascimento"/>
                <label for="senha">Senha:</label><input type="password" name="senha"/>
                <input type="submit" value="Cadastrar" className="botao_cadastro"/>
            </form>
        </div>
        
    )
}

export default FormUsuario