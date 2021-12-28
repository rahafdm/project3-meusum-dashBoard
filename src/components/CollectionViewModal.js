import { Button, ListGroup, Modal } from "react-bootstrap"

function CollectionViewModal(props) {
  const { show, setShow, collection } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> عرض مجموعة المتحف</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong> العنوان:</strong> {collection.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> الوصف:</strong> {collection.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الصورة:</strong>
            <img src={collection.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
          <strong>النوع:</strong>
            {collection.types.map(type => (
              <td>{type.name}</td>
            ))}
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

export default CollectionViewModal
