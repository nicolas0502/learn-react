import { Modal, Button } from "react-bootstrap"
import { useAuth } from '../providers/AuthProvider'

function ModalCetered(props) {

  const {userLogged} = useAuth();
  const {excluir, hqs, sethqs, onHide, show} = props

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
        props.onHide()
        let hqFiltered = hqs.filter((hq) =>{ 
          return hq.id !== hqId;
        });
        sethqs(hqFiltered)
      });
    }

    return (
      <Modal
        show= {show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Atenção!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p className="mt-4 mb-4">
            Tem certeza que deseja excluir esse produto?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button variant="danger" onClick={() => {handleTrashClick(excluir)}}>Excluir</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalCetered