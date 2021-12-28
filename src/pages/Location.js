import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import LocationRow from "../components/LocationRow"
import LocationAddModal from "../components/LocationAddModal"
import MuseumContext from "../utils/MuseumContext"

function Locations() {
  const { locations } = useContext(MuseumContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>الموقع</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>الموقع</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(location => (
            <LocationRow key={location._id} location={location} />
          ))}
        </tbody>
      </Table>
      <LocationAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Locations
