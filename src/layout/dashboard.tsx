import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
// import logo from "../assets/logo.svg";
import { ReactiveDrawer } from "./reactive-drawer";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        boxShadow: "none",
        overflowX: "auto",
        overflowY: "scroll",
        backgroundColor: theme.palette.background.default,
      }}>
      <AppBar
        position='sticky'
        sx={{
          top: 0,
          backgroundColor: "#fff",
          width: "100%",
          boxShadow: "none",
          height: "60px",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          {/* Menu Icon at the start */}
          <MenuRoundedIcon
            sx={{ color: "#000", cursor: "pointer" }}
            onClick={() => dispatch(toggleMenu())}
          />

          {/* Centered Image */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              height: "100%",
              color: "#000",
            }}>
            {/* <img src={logo} alt='logo' style={{ height: "90%" }} /> */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <ReactiveDrawer />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
