import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function TypeDeleteModal(props) {
  const { deleteType } = useContext(MuseumContext)
  const { show, setShow, typeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف نوع </Modal.Title>
      </Modal.Header>
      <Modal.Body>هل أنت متأكد أنك تريد حذف هذا النوع ؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteType(typeId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeDeleteModal
