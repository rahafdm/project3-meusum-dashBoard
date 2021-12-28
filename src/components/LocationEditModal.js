import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function LocationEditModal(props) {
  const { show, setShow, location } = props
  const { editlocation } = useContext(MuseumContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editlocation(e, location._id)}>
        <Modal.Header closeButton>
          <Modal.Title> تعديل النوع</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الأسم
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="location" defaultValue={location.location} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            اغلاق
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            تأكيد التغييرات
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default LocationEditModal