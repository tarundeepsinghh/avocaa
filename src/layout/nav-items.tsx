import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
// import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const NavItems = [
  {
    label: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    icon: <SpaceDashboardRoundedIcon />,
  },
  {
    label: "healthBenefits",
    title: "Health Benefit",
    path: "/health-benefits",
    icon: <SpaRoundedIcon />,
  },
  {
    label: "dishes",
    title: "Recipes",
    path: "/dishes",
    icon: <SoupKitchenRoundedIcon />,
  },
  {
    label: "boxes",
    title: "Boxes",
    path: "/boxes",
    icon: <LocalShippingRoundedIcon />,
  },
  {
    label: "aboutUs",
    title: "About Us",
    path: "/about-us",
    icon: <InfoRoundedIcon />,
  },
];

export default NavItems;
