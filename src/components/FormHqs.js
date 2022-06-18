import React from "react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft as ArrowLeft } from "react-icons/hi";
import "./FormHqs.css"
import { useAuth } from '../providers/AuthProvider';
import ModalAlerts from "./ModalAlerts";

const FormHqs = ({hqs, setHqs}) => {

    const nomeRef = useRef();
    const valorRef = useRef();
    const quantidadeRef = useRef();
    const descricaoRef = useRef();
    const imagemRef = useRef();
    const {userLogged} = useAuth();
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      nomeRef.current.focus()
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('nome', event.target[0].value);
      formData.append('valor', event.target[1].value);
      formData.append('quantidade', event.target[2].value);
      formData.append('descricao', event.target[3].value);
      formData.append('imagem', event.target[4].value);
      formData.append('id_vendedor', userLogged.id);
      fetch(
        "http://localhost/LP2/api/hq/create",
          {method: 'POST', 
          body: formData,
          headers: {
          "Access-Token": userLogged.token
        }}
        )
        .then((response) => response.json())
        .then((data) => {
          setModalShow(true)
          nomeRef.current.value = ''
          valorRef.current.value = ''
          quantidadeRef.current.value = ''
          descricaoRef.current.value = ''
          imagemRef.current.value = ''
          nomeRef.current.focus()
          setHqs([ data.hq , ...hqs])
          console.log(data)
        });
    } 

    return(
      <div className="hq_form">
        <ArrowLeft onClick={() => {navigate("../")}} className="arrow_left_produto"/>
        <form onSubmit={(event) => handleSubmit(event)} className="form_hq">
            <h1>Cadastro de Produto</h1>
            <label>Nome: </label> <input ref={nomeRef} type="text" name="nome" /> <br/>
            <label>Valor: </label> <input ref={valorRef} type="number" name="valor" /> <br/>
            <label>Quantidade: </label> <input ref={quantidadeRef} type="number" name="quantidade" /><br/>
            <label>Descrição: </label> <input ref={descricaoRef} type="text" name="descricao" /><br/>
            <label>Imagem: </label> <input ref={imagemRef} type="text" name="imagem" />  <br/>
            <input type="submit" value="Cadastrar" className="botao_cadastro"/>
        </form>
        <ModalAlerts show={modalShow} message="A sua hq foi cadastrada com sucesso" title="Sucesso no cadastro" onHide={() => setModalShow(false)} />
      </div>
    )
}

export default FormHqs