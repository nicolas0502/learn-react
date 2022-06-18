import { Modal, Button } from "react-bootstrap"
import { useAuth } from '../providers/AuthProvider'

function ModalCetered(props) {

  const {userLogged} = useAuth();

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
        let hqFiltered = props.hqs.filter((hq) =>{ 
          return hq.id !== hqId;
        });
        props.sethqs(hqFiltered)
      });
    }

    return (
      <Modal
        {...props}
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
          <Button variant="secondary" onClick={props.onHide}>Cancelar</Button>
          <Button variant="danger" onClick={() => {handleTrashClick(props.excluir)}}>Excluir</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalCetered