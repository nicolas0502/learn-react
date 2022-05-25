import "./FormVendedor.css"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";

const FormVendedor = ({vendedores, setVendedores}) => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('nome', event.target[0].value);
        formData.append('sobrenome', event.target[1].value);
        formData.append('email', event.target[2].value);
        formData.append('telefone', event.target[3].value);
        formData.append('cpf', event.target[4].value);
        formData.append('rg', event.target[5].value);
        formData.append('nascimento', event.target[6].value);
        formData.append('senha', event.target[7].value);
        formData.append('cep', event.target[8].value);
        fetch(
          "http://localhost/LP2/api/vendedor/create",
          {method: 'POST', body: formData}
          )
          .then((response) => response.json())
          .then((data) => {
            alert(data.message)
            setVendedores([ data.vendedores , ...vendedores])
          });
    }

    return (
        <div className="vendedor_form">
            <ArrowLeft onClick={() => {navigate("/cadastro-usuario-ou-vendedor")}} className="arrow_left_produto"/>
            <form onSubmit={(event) => handleSubmit(event)} className="form_vendedor">
                <h1>Cadastrar Vendedor</h1>
                <label for="nome">Nome:</label><input type="text" name="nome"/>
                <label for="sobrenome">Sobrenome:</label><input type="text" name="sobrenome"/>
                <label for="email">Email:</label><input type="email" name="email"/>
                <label for="telefone">Telefone:</label><input type="text" name="telefone"/>
                <label for="cpf">CPF:</label><input type="text" name="cpf"/>
                <label for="rg">RG:</label><input type="text" name="rg"/>
                <label for="nascimento">Data de Nascimento:</label><input type="text" name="nascimento"/>
                <label for="senha">Senha:</label><input type="password" name="senha"/>
                <label for="cep">CEP:</label><input type="text" name="cep"/>
                <input type="submit" value="Cadastrar" className="botao_cadastro"/>
            </form>
        </div>
        
    )
}

export default FormVendedor