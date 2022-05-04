import { useEffect,useState } from "react"
import "./CardHq.css"
import {BsTrash as IconTrash} from "react-icons/bs"

const EditarHq = () => {

    const [hqs, setHqs] = useState(null)

    useEffect(() =>{
        fetch("http://localhost/LP2/api/hq/select-all")
        .then((response) => response.json())
        .then((data) => setHqs(data))
    
    }, [])

    const handleTrashClick = (hqId) => {
        const formData = new FormData();
        formData.append('id', hqId);
        fetch("http://localhost/LP2/api/hq/delete", {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message)
            let hqFiltered = hqs.filter((hq) =>{ 
              return hq.id !== hqId;
            });
            setHqs(hqFiltered)
          });

    }
    return (
        <>
        <div className="request">
        {hqs && 
            hqs.map((hq) => {
                return (
                  <div key={hq.id} className="api">
                    <h1>{hq.nome}</h1>
                    <p className="descri">{hq.descricao}</p>
                    <div className="exemplo">
                      <p className="preco">{hq.valor}</p>
                      <IconTrash onClick={() => handleTrashClick(hq.id)} className="icontrash"/>
                    </div>
                  </div>
                    
                )
            })
        }
        </div>
        </>
    )
}

export default EditarHq