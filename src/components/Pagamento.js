import React, { useEffect } from 'react'
import "./Pagamento.css"
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import { useUserDados } from "../providers/UserProvider"
import { useAuth } from '../providers/AuthProvider'
import ModalAlerts from "./ModalAlerts";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Pagamento = () => {

    const {userDados} = useUserDados();
    const {userLogged} = useAuth();
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    const navigate = useNavigate();
    const [cep, setCep] = useState("")
    const [nav, setNav] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        var botoes = document.getElementsByName("metodo_pagamento");
        if(botoes[0].checked){
            setNav("pix")
        }else if(botoes[1].checked){
            setNav("cartao")
        }else if(botoes[2].checked){
            setNav("boleto")
        }
        setModalShow(true);
        setTitle("Sucesso No Pagamento!")
        setMessage("O Pagamento Foi Efetuado Com Sucesso!")
        localStorage.removeItem('carrinhoItens')
    } 

    useEffect(() => {
        if(userLogged.tipo === "vendedor"){
            setCep(userDados.cep)
        }
    },[userLogged.tipo, userDados.cep])

    function goBack() {
        window.history.back()
    }

    const onHide = () => {
        setModalShow(false)
        navigate(nav)
    }

  return (
    <>
    <ArrowLeft onClick={() => {goBack()}} className="arrow-left"/>
    <div className="pagamento_form">
            <form onSubmit={(event) => handleSubmit(event)} className="form_pagamento">
                <h1>Pagamento</h1>
                <label htmlFor="nome" className='pag'>Nome:</label><input type="text" name="nome" defaultValue={userDados.nome} required/>
                <label htmlFor="sobrenome" className='pag'>Sobrenome:</label><input type="text" name="sobrenome" defaultValue={userDados.sobrenome} required/>
                <label htmlFor="email" className='pag'>Email:</label><input type="email" name="email" defaultValue={userLogged.email} required/>
                <label htmlFor="cpf" className='pag'>CPF:</label><input type="text" name="cpf" defaultValue={userDados.cpf} maxLength={11} required/>
                <label htmlFor="telefone" className='pag'>Telefone:</label><input type="text" name="telefone" defaultValue={userDados.telefone} maxLength={11} required/>
                <p>Selecione a forma de Pagamento:</p>
                <div className='met_pag'>
                    <div className='PIX'>
                        <input type="radio" id="pix" name="metodo_pagamento" defaultValue="pix" required/>
                        <label htmlFor="pix">Pix</label>
                    </div>
                    <div className='CARTAO'>
                        <input type="radio" id="cartao" name="metodo_pagamento" defaultValue="cartao" required/>
                        <label htmlFor="cartao">Cartão</label>
                    </div>
                    <div className='BOLETO'>
                        <input type="radio" id="boleto" name="metodo_pagamento" defaultValue="boleto" required/>
                        <label htmlFor="boleto">Boleto</label>
                    </div>
                </div>
                <label htmlFor="cep" className='pag'>CEP:</label><input type="text" name="cep" defaultValue={cep} maxLength={8} required/>
                <label htmlFor="cidade" className='pag'>Cidade:</label><input type="text" name="cidade" required/>
                <label htmlFor="estado" className='pag'>Estado:</label><input type="text" name="estado"required/>
                <label htmlFor="rua" className='pag'>Rua:</label><input type="text" name="rua"required/>
                <label htmlFor="numero" className='pag'>Numero:</label><input type="number" name="numero"required/>
                <input type="submit" value="Concluir" className="botao_pagamento"/>
            </form>
            <ModalAlerts show={modalShow} message={message} title={title} onHide={() => onHide()} />
        </div>
    </>
  )
}

export default Pagamento