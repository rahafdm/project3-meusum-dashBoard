import { useState } from "react"
import { Button } from "react-bootstrap"
import LocationDeleteModal from "./LocationDeleteModal"
import LocationEditModal from "./LocationEditModal"



function LocationRow(props) {
  const { location } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{location._id}</td>
      <td>{location.location}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          تعديل
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <LocationDeleteModal show={deleteShow} setShow={setDeleteShow} locationId={location._id} />
      <LocationEditModal show={editShow} setShow={setEditShow} location={location} />
    </tr>
  )
}

export default LocationRow
