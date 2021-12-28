import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function AdminAddModal(props) {
  const { show, setShow } = props
  const { addAdmin } = useContext(MuseumContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addAdmin}>
        <Modal.Header closeButton>
          <Modal.Title> اضافة مسؤول </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الأسم الأول
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الأسم الأخير
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الأيميل
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              رقم الهاتف
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phoneNumber" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الرمز السري
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الصورة
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            اغلاق
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            اضافة مسؤول
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AdminAddModal
