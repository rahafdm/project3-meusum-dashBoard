import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import MuseumContext from "../utils/MuseumContext"

function TypeDeleteModal(props) {
  const { deleteLocation } = useContext(MuseumContext)
  const { show, setShow, locationId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> حذف الموقع</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل انت متأكد أنك تريد أن تحذف هذا الموقع ؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteLocation(locationId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeDeleteModal