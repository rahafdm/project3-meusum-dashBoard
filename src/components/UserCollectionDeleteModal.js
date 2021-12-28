import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"


function UserCollectionDeleteModal(props) {
  const { deleteUserCollection } = useContext(MuseumContext)
  const { show, setShow, userCollectionId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف مجموعة مستخدم</Modal.Title>
      </Modal.Header>
      <Modal.Body> هل أنت متأكد أنك تريد حذف مجموعة المستخدم هذا ؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteUserCollection(userCollectionId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserCollectionDeleteModal