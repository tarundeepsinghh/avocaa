import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  palette: {
    primary: {
      main: "#B44E43",
    },
    secondary: {
      main: "#BBC163",
    },
    background: {
      default: "#FAFADE",
    },
  },
});
