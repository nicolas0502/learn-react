
import { useNavigate } from 'react-router-dom'
import "./EditHq.css"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useAuth } from '../providers/AuthProvider';
import { useUserDados } from '../providers/UserProvider';
import { useState } from "react";
import ModalAlerts from "./ModalAlerts";

const EditUsua= () => {

    const navigate = useNavigate();
    const { userLogged } = useAuth();
    const { userDados, setUserDados } = useUserDados();
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [nav, setNav] = useState("")
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', userLogged.id)
        formData.append('nome', event.target[0].value);
        formData.append('sobrenome', event.target[1].value);
        formData.append('telefone', event.target[2].value);
        formData.append('cpf', event.target[3].value);
        formData.append('nascimento', event.target[4].value);
        fetch(
            "http://localhost/LP2/api/cliente/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.cliente?.id){
                    setModalShow(true);
                    setTitle("Sucesso Na Edição!")
                    setMessage(data.message)
                    setUserDados(data.cliente)
                    setNav("/perfil-usuario")
                } else if(data?.message){
                    setModalShow(true);
                    setTitle("Erro ao Editar")
                    setMessage("Ocorreu um Erro ao Editar os Dados!")
                    setNav("")
                }
            })
    } 

    const onHide = () => {
        setModalShow(false)
        navigate(nav)
    }

    function goBack() {
        window.history.back()
    }
  
    return (
        <>
        {userLogged ? (
            <div className="hq_edit">
                <ArrowLeft onClick={() => {goBack()}} className="arrow_left_produto"/>
                <form onSubmit={(event) => handleSubmit(event)} className="edit_hq">
                    <h1>Editar Perfil</h1>
                    <label>Nome: </label> <input type="text" name="nome" defaultValue={userDados.nome}/> <br/>
                    <label>Sobrenome: </label> <input type="text" name="sobrenome" defaultValue={userDados.sobrenome} /> <br/>
                    <label>Telefone: </label> <input type="number" name="telefone" defaultValue={userDados.telefone} maxLength={11} minLength={11}/><br/>
                    <label>CPF: </label> <input type="number" name="cpf" defaultValue={userDados.cpf}  maxLength={11} minLength={11}/><br/>
                    <label>Data de Nascimento: </label> <input type="date" name="nascimento" defaultValue={userDados.nascimento}/>  <br/>
                    <input type="submit" value="Editar" className="botao_edit"/>
                </form>
                <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
            </div>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )  
}

export default EditUsua