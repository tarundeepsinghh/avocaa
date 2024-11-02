import { SubTitleHeader } from "@/components/TitleHeader";
import { Box, Button, styled, Typography } from "@mui/material";

const BuyNowButton = styled(Button)({
  backgroundColor: "#4CAF50", // Deep avocado green
  color: "white",
  fontWeight: "bold",
  borderRadius: "12px", // Rounded edges
  padding: "10px 20px",
  fontSize: "16px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
  "&:hover": {
    backgroundColor: "#81C784", // Lighter green on hover
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)", // Enhance shadow on hover
  },
  transition: "all 0.3s ease", // Smooth hover transition
  marginTop: "10px", // Space from the content above
});

export function PriceComponent({
  title,
  discription,
  link,
}: {
  title: string;
  discription: string;
  link: string;
}) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <SubTitleHeader
        sx={{
          textAlign: "center",
          fontSize: "4em",
        }}>
        {title}
      </SubTitleHeader>
      <Typography sx={{ textAlign: "center" }}>{discription}</Typography>
      {/* <Typography sx={{ textAlign: "center" }}>
        <a style={{ textDecoration: "line-through" }}>₹{price}</a> ₹{discounted}
      </Typography> */}
      <BuyNowButton
        disableElevation
        href={`https://wa.me/+918130352989?text=${link}`}>
        Order Now
      </BuyNowButton>
    </Box>
  );
}
