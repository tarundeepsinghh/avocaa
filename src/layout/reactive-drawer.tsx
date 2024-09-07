import { Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppSelectors, toggleMenu } from "../store/appSlice";

export function ReactiveDrawer() {
  const isMenuOpen = useSelector(AppSelectors.selectIsMenuOpen);
  const dispatch = useDispatch();
  return (
    <Drawer
      open={isMenuOpen}
      sx={{ boxShadow: "none" }}
      onClose={() => dispatch(toggleMenu())}
      PaperProps={{
        sx: {
          boxShadow: "none",
          width: "250px",
          background: "#BBC163",
          borderCollapse: "collapse",
        },
      }}></Drawer>
  );
}
