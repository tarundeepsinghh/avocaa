import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Twoboxes from "../../assets/2.png";
import Fourboxes from "../../assets/4.png";
import backgroundCard from "../../assets/bg_box.svg";
import { PriceComponent } from "./box.component";
import { list } from "./list";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export function BoxComponent() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
        <Box
          sx={{
            background: `url(${backgroundCard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img src={Twoboxes} alt='two boxes' />
        </Box>
      </Grid2>
      {ismdUp && (
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <PriceComponent {...list[0]} />
        </Grid2>
      )}
      <Grid2 size={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 4 }}>
        {!ismdUp && (
          <Grid2
            container
            spacing={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {list.map(({ title, discription, price, discounted, link }) => (
              <Grid2
                size={{
                  xs: 0,
                  sm: 0,
                  md: 0,
                  lg: 6,
                  xl: 6,
                }}>
                <PriceComponent
                  {...{ title, discription, price, discounted, link }}
                />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
        <Box
          sx={{
            width: "100%",
            height: ismdUp ? "150%" : "100%",
            background: `url(${backgroundCard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src={Fourboxes}
            style={{
              width: ismdUp ? "80%" : "70%",
              height: ismdUp ? "80%" : "50%",
            }}
            alt='four boxes'
          />
        </Box>
      </Grid2>
      {ismdUp && (
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} sx={{ marginTop: "6rem" }}>
          <PriceComponent {...list[1]} />
        </Grid2>
      )}
      <Grid2
        size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          gap: "1rem",
        }}>
        <WhatsAppIcon
          sx={{ color: "#25D366", fontSize: "4rem", cursor: "pointer" }}
          href='https://wa.me/918130352989'
        />
        <InstagramIcon
          sx={{
            fontSize: "4rem",
            cursor: "pointer",
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            borderRadius: "15px",
            color: "#fff",
          }}
          href='https://www.instagram.com/weavocaa?igsh=MWFkdGMxMTVkNGt1Ng=='
        />
      </Grid2>
    </Grid2>
  );
}
// If you want to customize the component display name in React dev tools:
BoxComponent.displayName = "BoxesPage";

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }
  const errMsg = error instanceof Error ? error.message : "Unknown error";
  return <h1>{errMsg}</h1>;
}

ErrorBoundary.displayName = "BoxesErrorBoundary";
