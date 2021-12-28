import { useState } from "react"
import { Button } from "react-bootstrap"
import CollectionDeleteModal from "./CollectionDeleteModal"
import CollectionEditModal from "./CollectionEditModal"
import CollectionViewModal from "./CollectionViewModal"

function CollectionRow(props) {
  const { collection } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{collection._id}</td>
      <td>{collection.title}</td>
      <td>{collection.description}</td>
      <td>
        <img src={collection.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        {collection.types.map(type => (
          <p>{type.name}</p>
        ))}
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          عرض
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          تعديل
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <CollectionViewModal show={viewShow} setShow={setViewShow} collection={collection} />
      <CollectionEditModal show={editShow} setShow={setEditShow} collection={collection} />
      <CollectionDeleteModal show={deleteShow} setShow={setDeleteShow} collectionId={collection._id} />
    </tr>
  )
}

export default CollectionRow
