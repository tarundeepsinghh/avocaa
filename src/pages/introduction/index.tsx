import {
  Box,
  Divider,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import designRight from "../../assets/design-right.jpg";
import designLeft from "../../assets/design.png";
import detailedLogo from "../../assets/mainlogo.png";
import OmPng from "../../assets/om.png";
import SubwayPng from "../../assets/subway.png";
import toastPng from "../../assets/toast.png";
import juicePng from "../../assets/juice.png";
import { useEffect } from "react";

export function IntroComponent() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));
  /* add components in sm and xs under logo */
  const issmUp = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log(issmUp);
  }, [issmUp]);

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}>
          <img
            src={designLeft}
            alt='design'
            style={{ width: "25vw", background: "transparent" }}
          />
          {!ismdUp && (
            <img
              src={toastPng}
              alt='avocaa toast'
              style={{
                width: "17vw",
                background: "transparent",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}>
          {!ismdUp && (
            <img
              src={SubwayPng}
              alt='subway'
              style={{
                width: "17vw",
                background: "transparent",
                right: 0,
              }}
            />
          )}
          <img
            src={designRight}
            alt='design'
            style={{ width: "15vw", background: "transparent" }}
          />
        </Box>
      </Box>
      <Grid2
        container
        spacing={2}
        sx={{ margin: "0 2rem", alignItems: "center" }}>
        {!ismdUp && (
          <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
            <img src={OmPng} alt='om' style={{ width: "100%" }} />
          </Grid2>
        )}
        <Grid2
          size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
          sx={{ textAlign: "center" }}>
          <img src={detailedLogo} alt='logo' style={{ width: "100%" }} />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "2rem",
              textTransform: "capitalize",
            }}>
            the epitome of avocado excellence
          </Typography>
          <Divider
            sx={{ margin: "1rem 0", backgroundColor: "#BBC163", height: "4px" }}
          />
        </Grid2>
        {!ismdUp && (
          <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
            <img src={juicePng} alt='juice' />
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}

// If you want to customize the component display name in React dev tools:
IntroComponent.displayName = "IntroductionPage";

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

ErrorBoundary.displayName = "IntroductionErrorBoundary";
