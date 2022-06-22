import React from 'react'
import "./Pagamento.css"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useUserDados } from "../providers/UserProvider"
import { useAuth } from '../providers/AuthProvider'

const Pagamento = () => {

    const {userDados} = useUserDados();
    const {userLogged} = useAuth();

    function goBack() {
        window.history.back()
    }

  return (
    <>
    <ArrowLeft onClick={() => {goBack()}} className="arrow-left"/>
    <div className="pagamento_form">
            <form className="form_pagamento">
                <h1>Pagamento</h1>
                <label htmlFor="nome" className='pag'>Nome:</label><input type="text" name="nome" defaultValue={userDados.nome}/>
                <label htmlFor="sobrenome" className='pag'>Sobrenome:</label><input type="text" name="sobrenome" defaultValue={userDados.sobrenome}/>
                <label htmlFor="email" className='pag'>Email:</label><input type="email" name="email" defaultValue={userLogged.email}/>
                <label htmlFor="cpf" className='pag'>CPF:</label><input type="text" name="cpf" defaultValue={userDados.cpf}/>
                <label htmlFor="telefone" className='pag'>Telefone:</label><input type="text" name="telefone" defaultValue={userDados.telefone}/>
                <p>Selecione a forma de Pagamento:</p>
                <div className='met_pag'>
                    <div className='PIX'>
                        <input type="radio" id="pix" name="metodo_pagamento" defaultValue="pix"/>
                        <label htmlFor="pix">Pix</label>
                    </div>
                    <div className='CARTAO'>
                        <input type="radio" id="cartao" name="metodo_pagamento" defaultValue="cartao"/>
                        <label htmlFor="cartao">Cartão</label>
                    </div>
                    <div className='BOLETO'>
                        <input type="radio" id="boleto" name="metodo_pagamento" defaultValue="boleto"/>
                        <label htmlFor="boleto">Boleto</label>
                    </div>
                </div>
                <label htmlFor="cep" className='pag'>CEP:</label><input type="text" name="cep"/>
                <label htmlFor="cidade" className='pag'>Cidade:</label><input type="text" name="cidade"/>
                <label htmlFor="estado" className='pag'>Estado:</label><input type="text" name="estado"/>
                <label htmlFor="rua" className='pag'>Rua:</label><input type="text" name="rua"/>
                <label htmlFor="numero" className='pag'>Numero:</label><input type="number" name="numero"/>
                <input type="submit" defaultValue="Pagar Agora" className="botao_pagamento"/>
            </form>
        </div>
    </>
  )
}

export default Pagamento