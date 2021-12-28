import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import {  GiEgyptianProfile,  GiEgyptianUrns, GiSandsOfTime} from "react-icons/gi";
import { VscTypeHierarchy } from "react-icons/vsc";
import { HiUserGroup } from "react-icons/hi";
import MuseumIcon from '@mui/icons-material/Museum';
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import { useContext } from "react"
import MuseumContext from "../utils/MuseumContext"
import { VscLocation } from "react-icons/vsc";

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(MuseumContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "#795C34" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List>
          <ListItem>
            <ListItemIcon>
           < MuseumIcon />
            </ListItemIcon>
            <ListItemText primary="My Museum dashboard" />
          </ListItem>
        </List>
        <List>
        <Divider />
          <Link to="/collections">
            <ListItem button>
              <ListItemIcon>
                <GiEgyptianProfile style={{fontSize:"30px"}}/>
              </ListItemIcon>
              <ListItemText primary="مجموعة المتحف" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/types">
            <ListItem button>
              <ListItemIcon>
                <VscTypeHierarchy style={{fontSize:"30px"}}/>
              </ListItemIcon>
              <ListItemText primary="النوع" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/userCollections">
            <ListItem button>
              <ListItemIcon> 
                <GiEgyptianUrns style={{fontSize:"30px"}} />
              </ListItemIcon>
              <ListItemText primary="مجموعة المستخدمين" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <HiUserGroup style={{fontSize:"30px"}} />
              </ListItemIcon>
              <ListItemText primary="المستخدمين" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/locations">
            <ListItem button>
              <ListItemIcon>
                <VscLocation style={{fontSize:"33px"}} />
              </ListItemIcon>
              <ListItemText primary="الموقع" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/eras">
            <ListItem button>
              <ListItemIcon>
                <GiSandsOfTime style={{fontSize:"30px"}} />
              </ListItemIcon>
              <ListItemText primary="الحقبة" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardMuseum ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="تسجيل خروج" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="تسجيل دخول" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
