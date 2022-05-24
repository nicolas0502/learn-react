import React from 'react'
import "./Pagamento.css"

const Pagamento = () => {
  return (
    <div className="pagamento_form">
            <form className="form_pagamento">
                <h1>Pagamento</h1>
                <label for="nome" className='pag'>Nome:</label><input type="text" name="nome"/>
                <label for="email" className='pag'>Email:</label><input type="email" name="email"/>
                <label for="cpf" className='pag'>CPF:</label><input type="text" name="cpf"/>
                <label for="telefone" className='pag'>Telefone:</label><input type="text" name="telefone"/>
                <p>Selecione a forma de Pagamento:</p>
                <div className='met_pag'>
                    <div className='PIX'>
                        <input type="radio" id="pix" name="metodo_pagamento" value="pix"/>
                        <label for="pix">Pix</label>
                    </div>
                    <div className='CARTAO'>
                        <input type="radio" id="cartao" name="metodo_pagamento" value="cartao"/>
                        <label for="cartao">Cartão</label>
                    </div>
                    <div className='BOLETO'>
                        <input type="radio" id="boleto" name="metodo_pagamento" value="boleto"/>
                        <label for="boleto">Boleto</label>
                    </div>
                </div>
                <label for="cep" className='pag'>CEP:</label><input type="text" name="cep"/>
                <label for="cidade" className='pag'>Cidade:</label><input type="text" name="cidade"/>
                <label for="estado" className='pag'>Estado:</label><input type="text" name="estado"/>
                <label for="rua" className='pag'>Rua:</label><input type="text" name="rua"/>
                <label for="numero" className='pag'>Numero:</label><input type="number" name="numero"/>
                <input type="submit" value="Pagar Agora" className="botao_pagamento"/>
            </form>
        </div>
  )
}

export default Pagamento