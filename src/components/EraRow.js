import { useState } from "react"
import { Button } from "react-bootstrap"
import EraDeleteModal from "./EraDeleteModal"
import EraEditModal from "./EraEditModal"

function EraRow(props) {
  const { era } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{era._id}</td>
      <td>{era.era}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          تعديل
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <EraDeleteModal show={deleteShow} setShow={setDeleteShow} eraId={era._id} />
      <EraEditModal show={editShow} setShow={setEditShow} era={era} />
    </tr>
  )
}

export default EraRow
