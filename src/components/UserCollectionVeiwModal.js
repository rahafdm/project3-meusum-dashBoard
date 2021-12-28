import { Button, ListGroup, Modal } from "react-bootstrap"

function UserCollectionViewModal(props) {
  const { show, setShow, userCollection } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> اظهار مجموعة المستخدمين</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong> العنوان:</strong> {userCollection.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> الوصف:</strong> {userCollection.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الصورة:</strong>
            <img src={userCollection.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>النوع:</strong>
            {userCollection.types.map(type => (
              <td>{type.name}</td>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الموقع:</strong>

            <td>{userCollection.location.location}</td>
            
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الحقبة:</strong>

            <td>{userCollection.era.era}</td>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body> 
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          اغلاق   
        </Button>  
      </Modal.Footer>
    </Modal>
  )
}

export default UserCollectionViewModal
