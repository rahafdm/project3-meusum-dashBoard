import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import UserCollectionRow from "../components/UserCollectionRow"
import UserCollectionAddModal from "../components/UserCollectionAddModal"
import MuseumContext from "../utils/MuseumContext"

function UserCollections() {
  const { userCollections } = useContext(MuseumContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}> مجموعة مستخدمين</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> اضافة مجموعة مستخدمين
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
            <th style={{ width: "16%" }}>الموقع</th>
            <th style={{ width: "16%" }}>الحقبة</th>
            <th style={{ width: "25%" }}>نوع التغيير</th>
          </tr>
        </thead>
        <tbody>
          {userCollections.map(userCollection => (
            <UserCollectionRow key={userCollection._id} userCollection={userCollection} />
          ))}
        </tbody>
      </Table>
      <UserCollectionAddModal show={show} setShow={setShow} />
    </>
  )
}

export default UserCollections
