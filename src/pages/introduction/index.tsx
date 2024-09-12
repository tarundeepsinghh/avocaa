import {
  Box,
  Divider,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import designLeft from "../../assets/design-right.svg";
import designRightDesign from "../../assets/design-left.svg";
import juicePng from "../../assets/juice.png";
import detailedLogoSvg from "../../assets/mainlogo.svg";
import detailedLogoSm from "../../assets/logo.svg";
import OmPng from "../../assets/om.png";
import SubwaySvg from "../../assets/subway.svg";
import toastSvg from "../../assets/toast.svg";
// import leafSvg from "../../assets/leaf-left.svg";

export function IntroComponent() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));
  /* add components in sm and xs under logo */
  const issmUp = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log(issmUp);
  }, [issmUp]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}>
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
            style={{
              width: ismdUp ? "30vw" : "15vw",
              background: "transparent",
              transform: "scaleX(-1)",
            }}
          />
          {!ismdUp && (
            <img
              src={toastSvg}
              alt='avocaa toast'
              style={{
                width: "17vw",
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
              src={SubwaySvg}
              alt='subway'
              style={{
                width: "17vw",
                background: "transparent",
                right: 0,
              }}
            />
          )}
          <Box
            sx={{
              zIndex: 0,
            }}>
            <img
              src={designRightDesign}
              alt='design'
              style={{
                width: ismdUp ? "30vw" : "15vw",
                background: "transparent",
                transform: "scaleX(-1)",
                left: "0",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Grid2
        container
        spacing={2}
        sx={{
          margin: {
            xs: "-5rem 0 0 0",
            sm: "-5rem 0 0 0",
            md: "-5rem 0 0 0",
            lg: "-22.5rem 0 0 0",
            xl: "-22.5rem 0 0 0",
          },
          alignItems: "center",
        }}>
        {!ismdUp && (
          <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
            <img src={OmPng} alt='om' style={{ width: "100%" }} />
          </Grid2>
        )}
        <Grid2
          size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
          sx={{ textAlign: "center" }}>
          {ismdUp ? (
            <Box>
              <img src={detailedLogoSm} alt='logo' style={{ width: "100%" }} />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1em",
                  textTransform: "capitalize",
                  marginTop: "-3rem",
                }}>
                the epitome of avocado excellence
              </Typography>
              <Divider
                sx={{
                  margin: "1rem 0",
                  backgroundColor: "#BBC163",
                  height: "4px",
                }}
              />
            </Box>
          ) : (
            <img
              src={detailedLogoSvg}
              alt='logo'
              style={{
                width: "100%",
                transform: "rotate(90deg)",
              }}
            />
          )}
        </Grid2>
        {!ismdUp && (
          <>
            <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
              <img src={juicePng} alt='juice' />
              {/* <img
                src={leafSvg}
                alt='leaf'
                style={{
                  width: ismdUp ? "30vw" : "15vw",
                  background: "transparent",
                  transform: "scaleX(-1)",
                }}
              /> */}
            </Grid2>
          </>
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
