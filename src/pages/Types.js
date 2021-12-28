import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import TypesRow from "../components/TypesRow"
import TypesAddModal from "../components/TypesAddModal"
import MuseumContext from "../utils/MuseumContext"

function Types() {
  const { types } = useContext(MuseumContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>النوع</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>النوع</th>
          </tr>
        </thead>
        <tbody>
          {types.map(type => (
            <TypesRow key={type._id} type={type} />
          ))}
        </tbody>
      </Table>
      <TypesAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Types