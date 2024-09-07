import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  marginRight: theme.spacing(2),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NotFoundPage = () => (
  <div style={{ textAlign: "center", paddingTop: "60px" }}>
    <h1>Page Not Found</h1>
    <br />
    <StyledLink to='/'>Go Back</StyledLink>
  </div>
);

export default NotFoundPage;
