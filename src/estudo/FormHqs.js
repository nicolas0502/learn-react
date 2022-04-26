import React from "react";

const FormHqs = ({hqs, setHqs}) => {

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('nome', event.target[0].value);
      formData.append('valor', event.target[1].value);
      formData.append('quantidade', event.target[2].value);
      formData.append('descricao', event.target[3].value);
      formData.append('imagem', event.target[4].value);
      fetch(
        "http://localhost/LP2/api/hq/create",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
          alert(data.message)
          setHqs([ data.hq , ...hqs])
        });
    } 

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>Nome: </label> <input type="text" name="nome" /> <br/>
            <label>Valor: </label> <input type="number" name="valor" /> <br/>
            <label>Quantidade: </label> <input type="number" name="quantidade" /><br/>
            <label>Descrição: </label> <input type="text" name="descricao" /><br/>
            <label>Imagem: </label> <input type="text" name="imagem" />  <br/>
            <input type="submit" value="Cadastrar" />
        </form>
    )
}

export default FormHqs