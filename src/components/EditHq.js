import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./EditHq.css"
import { useAuth } from '../providers/AuthProvider';
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import ModalAlerts from "./ModalAlerts";

const EditHq= () => {

    const { hqId } = useParams();
    const [hq, setHq] = useState();
    const navigate = useNavigate();
    const {userLogged} = useAuth();
    const [modalShow, setModalShow] = useState(false);
    const [message,setMessage] = useState("")
    const [title,setTitle] = useState("")

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id="+hqId)
            .then((response) => response.json())
            .then((data) => {setHq(data)
                console.log(data)});
    }, [hqId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', hqId)
        formData.append('nome', event.target[0].value)
        formData.append('valor', event.target[1].value)
        formData.append('quantidade', event.target[2].value)
        formData.append('descricao', event.target[3].value)
        formData.append('imagem', event.target[4].value)
        fetch(
            "http://localhost/LP2/api/hq/update",
            {method: 'POST', 
             body: formData,
             headers: {
                "Access-Token": userLogged.token
            }})
            .then((response) => response.json())
            .then((data) => {
                if(data?.hq?.id){
                    setTitle("Sucesso na Edição!")
                    setMessage("A sua HQ foi Editada com Sucesso")
                    setModalShow(true)
                } else if(data?.message){
                    setTitle("Erro ao Edição!")
                    setMessage(data.message)
                    setModalShow(true)
                } else {
                    console.log(data)
                }
            })
    } 

    const onHide = () => {
        setModalShow(false)
        navigate("../")
    }
  
    return (
        <>
        {hq ? (
            <div className="hq_edit">
                <ArrowLeft onClick={() => {navigate("../")}} className="arrow_left_produto"/>
                <form onSubmit={(event) => handleSubmit(event)} className="edit_hq">
                    <h1>Editar Produto</h1>
                    <label>Nome: </label> <input type="text" name="nome" defaultValue={hq.nome}/> <br/>
                    <label>Valor: </label> <input type="number" name="valor" defaultValue={hq.valor} /> <br/>
                    <label>Quantidade: </label> <input type="number" name="quantidade" defaultValue={hq.quantidade}/><br/>
                    <label>Descrição: </label> <input type="text" name="descricao" defaultValue={hq.descricao}/><br/>
                    <label>Imagem: </label> <input type="text" name="imagem" defaultValue={hq.imagem}/>  <br/>
                    <input type="submit" value="Editar" className="botao_edit"/>
                </form>
                <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
            </div>
            )
        : 
            (<p>Hq não encontrado!</p>)
        }
        </>
    )
}

export default EditHq