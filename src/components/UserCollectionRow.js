import { useState } from "react"
import { Button } from "react-bootstrap"
import UserCollectionDeleteModal from "./UserCollectionDeleteModal"
import UserCollectionEditModal from "./UserCollectionEditModal"
import UserCollectionViewModal from "./UserCollectionVeiwModal"

function UserCollectionRow(props) {
  const { userCollection } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{userCollection._id}</td>
      <td>{userCollection.title}</td>
      <td>{userCollection.description}</td>
      <td>
        <img src={userCollection.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>

      {userCollection.types.map(type => (
        <p>{type.name}</p>
      ))}

      <td>{userCollection.location.location}</td>

      <td>{userCollection.era.era}</td>

      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          اظهار
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          تعديل
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <UserCollectionViewModal show={viewShow} setShow={setViewShow} userCollection={userCollection} />
      <UserCollectionEditModal show={editShow} setShow={setEditShow} userCollection={userCollection} />
      <UserCollectionDeleteModal show={deleteShow} setShow={setDeleteShow} userCollectionId={userCollection._id} />
    </tr>
  )
}

export default UserCollectionRow
