import "./FormVendedor.css"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";

const FormVendedor = ({vendedores, setVendedores}) => {

    const navigate = useNavigate();

    const nomeRef = useRef();

    useEffect(() => {
      nomeRef.current.focus()
    })

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
            nomeRef.current.focus()
            alert(data.message)
            navigate('/login-vendedor');
            setVendedores([ data.vendedor , ...vendedores])
          });
    }

    return (
        <div className="vendedor_form">
            <ArrowLeft onClick={() => {navigate("/cadastro-usuario-ou-vendedor")}} className="arrow_left_produto"/>
            <form onSubmit={(event) => handleSubmit(event)} className="form_vendedor">
                <h1>Cadastrar Vendedor</h1>
                <label htmlFor="nome">Nome:</label><input type="text" name="nome" ref={nomeRef}/>
                <label htmlFor="sobrenome">Sobrenome:</label><input type="text" name="sobrenome"/>
                <label htmlFor="email">Email:</label><input type="email" name="email"/>
                <label htmlFor="telefone">Telefone:</label><input type="text" name="telefone" maxLength={11}/>
                <label htmlFor="cpf">CPF:</label><input type="text" name="cpf" maxLength={11}/>
                <label htmlFor="rg">RG:</label><input type="text" name="rg" maxLength={9}/>
                <label htmlFor="nascimento">Data de Nascimento:</label><input type="date" name="nascimento"/>
                <label htmlFor="senha">Senha:</label><input type="password" name="senha"/>
                <label htmlFor="cep">CEP:</label><input type="text" name="cep" maxLength={8}/>
                <input type="submit" value="Cadastrar" className="botao_cadastro"/>
            </form>
        </div>
        
    )
}

export default FormVendedor