import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function CollectionAddModal(props) {
  const { show, setShow } = props
  const { addUserCollection, types, locations, eras } = useContext(MuseumContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addUserCollection}>
        <Modal.Header closeButton>
          <Modal.Title> اضافة مجموعة مستخدم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              العنوان
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الوصف
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الصورة
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              النوع
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {types.map(type => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="checkbox" name="types" value={type._id} />
                  </Col>
                  <Col md="7">
                    <span style={{ marginLeft: 10 }}>
                      {type.name} 
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الموقع
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {locations.map(location => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="location" value={location._id} />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>
                      {location.location}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الحقبة
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {eras.map(era => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="era" value={era._id} />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>
                      {era.era} 
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            اغلاق
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            اضافة مجموعة
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CollectionAddModal
