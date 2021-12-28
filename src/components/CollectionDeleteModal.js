import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"


function CollectionDeleteModal(props) {
  const { deleteCollection } = useContext(MuseumContext)
  const { show, setShow, collectionId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف مجموعة المتحف</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل أنت متأكد أنك  تريد مجموعة المتحف هذه ؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteCollection(collectionId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CollectionDeleteModal