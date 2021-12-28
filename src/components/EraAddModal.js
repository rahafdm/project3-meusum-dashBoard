import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function EraAddModal(props) {
  const { show, setShow } = props
  const { addEra } = useContext(MuseumContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addEra}>
        <Modal.Header closeButton>
          <Modal.Title> اضافة حقبة </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الحقبة
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="era" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            اغلاق
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            اضافة حقبة
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EraAddModal