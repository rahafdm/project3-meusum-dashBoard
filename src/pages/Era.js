import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import EraRow from "../components/EraRow"
import EraAddModal from "../components/EraAddModal"
import MuseumContext from "../utils/MuseumContext"

function Eras() {
  const { eras } = useContext(MuseumContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>الحقبة</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>الحقبة</th>
          </tr>
        </thead>
        <tbody>
          {eras.map(era => (
            <EraRow key={era._id} era={era} />
          ))}
        </tbody>
      </Table>
      <EraAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Eras