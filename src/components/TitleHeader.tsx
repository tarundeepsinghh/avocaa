import { styled, Typography } from "@mui/material";

export const TitleHeader = styled(Typography)(({ theme }) => ({
  color: "#B44E43",
  fontWeight: "bold",
  [theme.breakpoints.down("xs")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "10rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14rem",
  },
}));

export const SubTitleHeader = styled(Typography)({
  color: "#B44E43",
  fontWeight: "bold",
});
