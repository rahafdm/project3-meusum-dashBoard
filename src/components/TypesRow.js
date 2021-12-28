import { useState } from "react"
import { Button } from "react-bootstrap"
import TypesDeleteModal from "./TypesDeleteModal"
import TypesEditModal from "./TypesEditModal"

function TypeRow(props) {
  const { type } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{type._id}</td>
      <td>{type.name}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          تعديل
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <TypesDeleteModal show={deleteShow} setShow={setDeleteShow} typeId={type._id} />
      <TypesEditModal show={editShow} setShow={setEditShow} type={type} />
    </tr>
  )
}

export default TypeRow
