import { useEffect,useState } from "react"
import "./CardHq.css"
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {MdModeEditOutline as EditHq} from 'react-icons/md'
import { useAuth } from '../providers/AuthProvider'

const EditarHq = () => {

    const [hqs, setHqs] = useState(null)
    const navigate = useNavigate();
    const {userLogged} = useAuth();

    useEffect(() =>{
        fetch("http://localhost/LP2/api/hq/select-hq-by-vendedor/?id="+userLogged.id)
        .then((response) => response.json())
        .then((data) => setHqs(data))
    
    }, [userLogged.id])

    const handleTrashClick = (hqId) => {
        const formData = new FormData();
        formData.append('id', hqId);
        fetch("http://localhost/LP2/api/hq/delete", {
          method: 'POST',
          body: formData,
          headers: {
            "Access-Token": userLogged.token
          }})
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
                    <div>
                      <p className="imgg">{hq.imagem}</p>
                    </div>
                    <div className="card-tittle">
                      <h1>{hq.nome}</h1>
                      <p className="preco">R$ {((hq.valor).toString().replace(".", ","))}</p>
                      <div className="icons">
                        <div className="trash1">
                          <IconTrash onClick={() => handleTrashClick(hq.id)} className="icontrash"/>
                        </div>
                        <div className="edit1">
                          <EditHq className="edithq" onClick={() => navigate('edit/'+hq.id)} />
                        </div>
                      </div>
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