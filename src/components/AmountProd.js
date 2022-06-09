import './AmountProd.css';
import {useState} from 'react'
import { Button } from 'react-bootstrap'

const AmountProd = (props) => {
    
    const [count, setCount] = useState(1)
    const intQuant = parseInt(props.quanti)

    function sub(){
        if(count !== 1){
            setCount(count - 1)
        }
    }

    function plus(){
        if(count !== intQuant){
            setCount(count + 1)
        }
    }

    const valueProd = (props.value)

    return(
        <div className="d-flex justify-content-between" id="countValue">
            <div className='d-flex' id="contProd">
                <Button id="subBtn" onClick={() => sub()}> - </Button>
                <div id="display" count={count}> {count} </div>
                <Button id="plusBtn" onClick={() => plus()}> + </Button>
            </div>
            <h5 id="valor_total"> R$ {valueProd * count} </h5>
        </div>
    )
}

export default AmountProd