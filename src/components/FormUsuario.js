import "./FormUsuario.css"
import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Google from "../assets/icons/google.png"
import { useNavigate } from "react-router-dom"
import { useRef, useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import ModalAlerts from "./ModalAlerts";

const FormUsuario = () => {

    const nomeRef = useRef();
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState("")
    const [title, setTitle] = useState("")
    const [nav, setNav] = useState("")

    useEffect(() => {
      nomeRef.current.focus()
    })

    const navigate = useNavigate()

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
            if(data?.cliente){
                setTitle("Sucesso No Cadastro!")              
                setMessage(data.message)
                setModalShow(true)
                setNav("/login-usuario")
            } else if(data?.message){
                setTitle("Erro no Cadastro!")
                setMessage(data.message)
                setModalShow(true)
                setNav("")
            }
          });
    }

    function onHide(){
        setModalShow(false)
        navigate(nav)
      }


    return (
        <div className="usuario_form">
            <ArrowLeft onClick={() => {navigate("/cadastro-usuario-ou-vendedor")}} className="arrow_left_produto"/>
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
                <label htmlFor="nome">Nome:</label><input type="text" name="nome" ref={nomeRef}/>
                <label htmlFor="sobrenome">Sobrenome:</label><input type="text" name="sobrenome"/>
                <label htmlFor="email">Email:</label><input type="email" name="email"/>
                <label htmlFor="telefone">Telefone:</label><input type="text" name="telefone" maxLength={11} minLength={11}/>
                <label htmlFor="cpf">CPF:</label><input type="text" name="cpf" maxLength={11} minLength={11}/>
                <label htmlFor="nascimento">Data de Nascimento:</label><input type="date" name="nascimento"/>
                <label htmlFor="senha">Senha:</label><input type="password" name="senha"/>
                <input type="submit" value="Cadastrar" className="botao_cadastro"/>
            </form>
            <ModalAlerts show={modalShow} message={message+". Agora Efetue o Login."} title={title} onHide={() => onHide()} />
        </div>
        
    )
}

export default FormUsuario