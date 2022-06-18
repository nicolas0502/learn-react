import { Modal, Button } from "react-bootstrap"


function ModalAlerts(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalAlerts