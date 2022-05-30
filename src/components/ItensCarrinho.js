import { useEffect, useState } from 'react'
import "./ItensCarrinho.css"

const ItensCarrinho = () => {
    const [hq, setHq] = useState();

    useEffect(() => {
        fetch("http://localhost/LP2/api/hq/select-by-id/?id=1")
            .then((response) => response.json())
            .then((data) => {setHq(data)
                console.log(data)});
    }, []);

  return (
    <>
        {hq ? (
                <div className='ItemCarrinho'>
                    <div>{hq.imagem}</div>
                    <div>
                        <div>{hq.nome}</div>
                        <div>Em 10x de R${((hq.valor / 10).toString().replace(".", ","))} sem juros</div>
                    </div>
                    <div>
                        <div class="number-input">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                            <input class="quantity" min="0" name="quantity" type="number" />
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                    </div>
                </div>            
            )
        : 
            (<p>Hq não encontrado!</p>)
        }
    </>
  )
}

export default ItensCarrinho