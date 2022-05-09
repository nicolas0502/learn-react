import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./EditHq.css"

const EditHq= () => {

    const { hqId } = useParams();
    const [hq, setHq] = useState();
    const navigate = useNavigate();

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
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.hq?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {hq ? (
            <div className="hq_edit">
                <form onSubmit={(event) => handleSubmit(event)} className="edit_hq">
                    <h1>Editar Produto</h1>
                    <label>Nome: </label> <input type="text" name="nome" defaultValue={hq.nome}/> <br/>
                    <label>Valor: </label> <input type="number" name="valor" defaultValue={hq.valor} /> <br/>
                    <label>Quantidade: </label> <input type="number" name="quantidade" defaultValue={hq.quantidade}/><br/>
                    <label>Descrição: </label> <input type="text" name="descricao" defaultValue={hq.descricao}/><br/>
                    <label>Imagem: </label> <input type="text" name="imagem" defaultValue={hq.imagem}/>  <br/>
                    <input type="submit" value="Editar" className="botao_edit"/>
                </form>
            </div>
            )
        : 
            (<p>Hq não encontrado!</p>)
        }
        </>
    )
}

export default EditHq