import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function UserViewModal(props) {
  const { show, setShow, user } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> اظهار المستخدم</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong> الأسم كامل :</strong> {user.firstName} {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> أيميل :</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> رقم الهاتف :</strong> {user.phoneNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>آفاتار:</strong>
            <img src={user.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الدور:</strong> {user.role}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          أغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserViewModal
