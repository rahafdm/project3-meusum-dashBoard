import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function EraDeleteModal(props) {
  const { deleteEra } = useContext(MuseumContext)
  const { show, setShow, eraId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف الحقبة </Modal.Title>
      </Modal.Header>
      <Modal.Body>هل أنت متأكد أنك تريد حذف هذه الحقبة ؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteEra(eraId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EraDeleteModal