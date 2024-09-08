import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

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
    title: "Dishes",
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
    label: "internationalServing",
    title: "International Serving",
    path: "/international-serving",
    icon: <PublicRoundedIcon />,
  },
];

export default NavItems;
