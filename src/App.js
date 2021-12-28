import { CssBaseline } from "@mui/material"
import axios from "axios"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router"
import { toast, ToastContainer } from "react-toastify"
import MuseumContext from "./utils/MuseumContext"
import Login from "./pages/Login"
import SideBar from "./components/Sidebar"
import Collection from "./pages/Collection"
import User from "./pages/Users"
import Types from "./pages/Types"
import Locations from "./pages/Location"
import Eras from "./pages/Era"
import UserCollections from "./pages/UserCollection"

function App() {
  const [collections, setCollections] = useState([])
  const [userCollections, setUserCollections] = useState([])
  const [locations, setLocations] = useState([])
  const [eras, setEras] = useState([])
  const [types, setTypes] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])

  const navigate = useNavigate()

  // GET COLLECTIONS
  const getCollections = async () => {
    const response = await axios.get("http://localhost:5000/api/collections", {
      headers: {
        Authorization: localStorage.tokenDashboardMuseum,
      },
    })
    setCollections(response.data)
  }

  //GET USER COLLECTIONS
  const getUserCollections = async () => {
    const response = await axios.get("http://localhost:5000/api/usercollections")
    setUserCollections(response.data)
  }

  //GET LOCATION
  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/api/locations")
    setLocations(response.data)
  }

  //GET ERA
  const getEras = async () => {
    const response = await axios.get("http://localhost:5000/api/eras")
    setEras(response.data)
  }

  //GET TYPE
  const getTypes = async () => {
    const response = await axios.get("http://localhost:5000/api/types")
    setTypes(response.data)
  }

  //GET USERS
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardMuseum,
      },
    })
    setUsers(response.data)
  }

  //GET COMMENTS
  const getComments = async userCollectionsId => {
    const response = await axios.get(`http://localhost:5000/api/${userCollectionsId}/comments`, {
      headers: {
        Authorization: localStorage.tokenDashboardMuseum,
      },
    })
    setComments(response.data)
  }

  //DELETE COLLECTIONS
  const deleteCollection = async collectionId => {
    try {
      await axios.delete(`http://localhost:5000/api/collections/${collectionId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("collection has been deleted")
      getCollections()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //DELETE USER COLLECTIONS
  const deleteUserCollection = async userCollectionsId => {
    try {
      await axios.delete(`http://localhost:5000/api/userCollections/${userCollectionsId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("User Collection has been deleted")
      getUserCollections()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //DELETE USERS
  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("user has been deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //DELETE LOCATION
  const deleteLocation = async locationId => {
    try {
      await axios.delete(`http://localhost:5000/api/locations/${locationId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("location has been deleted")
      getLocations()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //DELETE ERA
  const deleteEra = async eraId => {
    try {
      await axios.delete(`http://localhost:5000/api/eras/${eraId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("era has been deleted")
      getEras()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //DELETE TYPES
  const deleteType = async typeId => {
    try {
      await axios.delete(`http://localhost:5000/api/types/${typeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      toast.success("types has been deleted")
      getTypes()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //  //DELETE COMMENTS
  //  const deleteComment = async userCollectionsId => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/${userCollectionsId}/`, {
  //       headers: {
  //         Authorization: localStorage.tokenDashboardMuseum,
  //       },
  //     })
  //     toast.success("location has been deleted")
  //     getLocations()
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  useEffect(() => {
    getCollections()
    getLocations()
    getTypes()
    getUserCollections()
    getUsers()
    getEras()
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardMuseum = response.data
      toast.success("login success")
      navigate("/collections")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //EDIT COLLECTIONS
  const editCollection = async (e, collectionId) => {
    e.preventDefault()
    try {
      const form = e.target

      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }

      const collectionBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        types: types,
      }
      await axios.put(`http://localhost:5000/api/collections/${collectionId}`, collectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getCollections()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //EDIT USER COLLECTION
  const editUserCollection = async (e, userCollectionId) => {
    e.preventDefault()
    try {
      const form = e.target

      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }

      const userCollectionBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        types: types,
        location: form.elements.location.value,
        era: form.elements.era.value,
      }
      await axios.put(`http://localhost:5000/api/userCollections/${userCollectionId}`, userCollectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getUserCollections()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //EDIT TYPES
  const editType = async (e, typeId) => {
    e.preventDefault()
    try {
      const form = e.target

      const typeBody = {
        name: form.elements.name.value,
      }
      await axios.put(`http://localhost:5000/api/types/${typeId}`, typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getTypes()
      toast.success("edit types success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //EDIT Location
  const editlocation = async (e, locationId) => {
    e.preventDefault()
    try {
      const form = e.target

      const locationBody = {
        location: form.elements.location.value,
      }
      await axios.put(`http://localhost:5000/api/locations/${locationId}`, locationBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getLocations()
      toast.success("edit location success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //EDIT ERA
  const editEra = async (e, eraId) => {
    e.preventDefault()
    try {
      const form = e.target

      const eraBody = {
        era: form.elements.era.value,
      }
      await axios.put(`http://localhost:5000/api/eras/${eraId}`, eraBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getEras()
      toast.success("edit eras success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD LOCATION
  const addLocation = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const locationBody = {
        location: form.elements.location.value,
      }
      await axios.post(`http://localhost:5000/api/locations`, locationBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getLocations()
      toast.success("add location success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD TYPES
  const addTypes = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const typeBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/types`, typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getTypes()
      toast.success("add type success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD ERA
  const addEra = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const eraBody = {
        era: form.elements.era.value,
      }
      await axios.post(`http://localhost:5000/api/eras`, eraBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getEras()
      toast.success("add era success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD COLLECTION
  const addCollection = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }

      const collectionBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        types: types,
      }
      await axios.post(`http://localhost:5000/api/collections`, collectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getCollections()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD USER COLLECTION
  const addUserCollection = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }

      const userCollectionBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        types: types,
        location: form.elements.location.value,
        era: form.elements.era.value,
      }
      await axios.post(`http://localhost:5000/api/userCollections/`, userCollectionBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getUserCollections()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //ADD ADMIN
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        phoneNumber: form.elements.phoneNumber.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardMuseum,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardMuseum")
  }

  const store = {
    collections,
    userCollections,
    types,
    locations,
    eras,
    users,
    comments,
    login,
    deleteCollection,
    deleteLocation,
    deleteEra,
    deleteUser,
    deleteType,
    deleteUserCollection,
    editCollection,
    editType,
    editlocation,
    editEra,
    editUserCollection,
    logout,
    addEra,
    addLocation,
    addTypes,
    addUserCollection,
    addCollection,
    addAdmin,
  }

  return (
    <MuseumContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/collections"
              element={localStorage.tokenDashboardMuseum ? <Collection /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={localStorage.tokenDashboardMuseum ? <User /> : <Navigate to="/login" />} />
            <Route path="/types" element={localStorage.tokenDashboardMuseum ? <Types /> : <Navigate to="/login" />} />
            <Route
              path="/locations"
              element={localStorage.tokenDashboardMuseum ? <Locations /> : <Navigate to="/login" />}
            />
            <Route path="/eras" element={localStorage.tokenDashboardMuseum ? <Eras /> : <Navigate to="/login" />} />
            <Route
              path="/userCollections"
              element={localStorage.tokenDashboardMuseum ? <UserCollections /> : <Navigate to="/login" />}
            />
          </Routes>
        </Box>
      </Box>
    </MuseumContext.Provider>
  )
}

export default App
