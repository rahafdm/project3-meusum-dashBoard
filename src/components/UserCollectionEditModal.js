import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function CollectionEditModal(props) {
  const { show, setShow, userCollection } = props
  const { editUserCollection, types, locations, eras } = useContext(MuseumContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editUserCollection(e, userCollection._id)}>
        <Modal.Header closeButton>
          <Modal.Title> تعديل مجموعة المستخدمين</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              العنوان
            </Form.Label>
            <Col md="8">
              <Form.Control name="title" type="text" defaultValue={userCollection.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الوصف
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" defaultValue={userCollection.description} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الصورة
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={userCollection.image} />
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
                    <Form.Check
                      type="checkbox"
                      name="types"
                      defaultChecked={userCollection.types.find(typeUser => typeUser._id === type._id)}
                      value={type._id}
                    />
                  </Col>
                  <Col md="7">
                    <span style={{ marginLeft: 10 }}>{type.name}</span>
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
              {locations.map(locationObject => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="location"
                      defaultChecked={userCollection.location._id === locationObject._id}
                      value={locationObject._id}
                    />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>{locationObject.location}</span>
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
              {eras.map(eraObject => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="era"
                      defaultChecked={userCollection.era._id === eraObject._id}
                      value={eraObject._id}
                    />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>{eraObject.era}</span>
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            تعديل المجموعة
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CollectionEditModal
