import { useEffect,useState } from "react"
import "./CardHq.css"
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {MdModeEditOutline as EditHq} from 'react-icons/md'
import { useAuth } from '../providers/AuthProvider'
import ModalCentered from "./ModalCentered"

const EditarHq = () => {

    const [modalShow, setModalShow] = useState(false);
    const [hqs, setHqs] = useState(null)
    const navigate = useNavigate();
    const {userLogged} = useAuth();
    const [idToDelete, setIdToDelete] = useState(0)

    useEffect(() =>{
        fetch("http://localhost/LP2/api/hq/select-hq-by-vendedor/?id="+userLogged.id)
        .then((response) => response.json())
        .then((data) => setHqs(data))
    
    }, [userLogged.id])

    const handleDelete = (id) => {
      setIdToDelete(id)
      setModalShow(true)
    } 

    return (
        <>
        <div className="request">
        {hqs && 
            hqs.map((hq) => {
                return (
                  <div key={hq.id} className="api1">
                    <div>
                    <img className="imggg" src={hq.imagem} alt="imagem do produto"/>
                    </div>
                    <div className="card-tittle">
                      <h1>{hq.nome}</h1>
                      <p className="preco">R$ {((hq.valor).toString().replace(".", ","))}</p>
                      <div className="icons">
                        <div className="trash1">
                          <IconTrash onClick={() => handleDelete(hq.id)} className="icontrash"/>
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
        <ModalCentered
          show={modalShow}
          onHide={() => setModalShow(false)}
          excluir = {idToDelete}
          sethqs={setHqs}
          hqs={hqs}
        />
        </div>
        </>
    )
}

export default EditarHq