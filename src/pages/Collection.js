import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import CollectionRow from "../components/CollectionRow"
import CollectionAddModal from "../components/CollectionAddModal"
import MuseumContext from "../utils/MuseumContext"

function Collections() {
  const { collections } = useContext(MuseumContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>مجموعة المتحف</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> اضافة مجموعة متحف
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>العنوان</th>
            <th style={{ width: "20%" }}>الوصف</th>
            <th style={{ width: "18%" }}>الصورة</th>
            <th style={{ width: "16%" }}>النوع</th>
            <th style={{ width: "25%" }}>نوع التغيير</th>

          </tr>
        </thead>
        <tbody>
          {collections.map(collection => (
            <CollectionRow key={collection._id} collection={collection} />
          ))}
        </tbody>
      </Table>
      <CollectionAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Collections
