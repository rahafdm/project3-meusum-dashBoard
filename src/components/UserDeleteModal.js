import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function UserDeleteModal(props) {
  const { deleteUser } = useContext(MuseumContext)
  const { show, setShow, userId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف مستخدم</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل أنت متأكد بأنك تريد هذا المستخدم</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal