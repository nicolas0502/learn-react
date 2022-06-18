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
            <div className="mt-3 mb-3">
                {props.message}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalAlerts