import { useEffect, useState } from "react";
import "./CardHq.css"
import { useNavigate } from 'react-router-dom'

const CardHqUsua = () => {
 
    const [hqs, setHqs] = useState(null)
    const navigate = useNavigate();

    useEffect(() =>{
        fetch("http://localhost/LP2/api/hq/select-all")
        .then((response) => response.json())
        .then((data) => setHqs(data))
    
    }, [])    

    return (
        <>
        <div className="request">
        {hqs && 
            hqs.map((hq) => {
                return (
                  <div key={hq.id} className="api" onClick={() => navigate('produto/'+hq.id)}>
                    <div>
                      <p className="imggg">{hq.imagem}</p>
                    </div>
                    <div className="card-tittle">
                      <h1>{hq.nome}</h1>
                      <p className="precoo">R$ {hq.valor}</p>               
                    </div>
                  </div> 
                )
            })
        }
        </div>
        </>
    )

}

export default CardHqUsua