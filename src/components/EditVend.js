import { useNavigate } from 'react-router-dom'
import "./EditHq.css"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useAuth } from '../providers/AuthProvider';
import { useUserDados } from '../providers/UserProvider';

const EditVend= () => {

    const navigate = useNavigate();
    const { userLogged } = useAuth();
    const { userDados } = useUserDados();

  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', userLogged.id)
        formData.append('nome', event.target[0].value);
        formData.append('sobrenome', event.target[1].value);
        formData.append('telefone', event.target[2].value);
        formData.append('cpf', event.target[3].value);
        formData.append('rg', event.target[4].value);
        formData.append('nascimento', event.target[5].value);
        formData.append('cep', event.target[6].value);
        fetch(
            "http://localhost/LP2/api/vendedor/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.cliente?.id){
                    alert('Dados atualizados com sucesso!')
                    navigate('/perfil-vendedor');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {userLogged ? (
            <div className="hq_edit">
                <ArrowLeft onClick={() => {navigate("/perfil-vendedor")}} className="arrow_left_produto"/>
                <form onSubmit={(event) => handleSubmit(event)} className="edit_hq">
                    <h1>Editar Perfil</h1>
                    <label>Nome: </label> <input type="text" name="nome" defaultValue={userDados.nome}/> <br/>
                    <label>Sobrenome: </label> <input type="text" name="sobrenome" defaultValue={userDados.sobrenome} /> <br/>
                    <label>Telefone: </label> <input type="text" name="telefone" defaultValue={userDados.telefone} maxLength={11} minLength={11}/><br/>
                    <label>CPF: </label> <input type="text" name="cpf" defaultValue={userDados.cpf} maxLength={11} minLength={11}/><br/>
                    <label>RG: </label> <input type="text" name="rg" defaultValue={userDados.rg} maxLength={9} minLength={9}/><br/>
                    <label>Data de Nascimento: </label> <input type="date" name="nascimento" defaultValue={userDados.nascimento}/>  <br/>
                    <label>CEP: </label> <input type="text" name="cep" defaultValue={userDados.cep} maxLength={8} minLength={8}/><br/>
                    <input type="submit" value="Editar" className="botao_edit"/>
                </form>
            </div>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )  
}

export default EditVend