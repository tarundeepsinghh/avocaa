import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import designRightDesign from "../../assets/design-left.svg";
import designLeft from "../../assets/design-right.svg";
import juicePng from "../../assets/juice.png";
import detailedLogoSvg from "../../assets/mainlogo.svg";
import OmPng from "../../assets/om.png";
import SubwaySvg from "../../assets/subway.svg";
import toastSvg from "../../assets/toast.svg";
import tempSvg from "../../assets/1.svg";
import sushiSvg from "../../assets/sushi.svg";

export function IntroComponent() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}>
      {!ismdUp ? (
        <Box>
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
                  width: "15vw",
                  background: "transparent",
                  transform: "scaleX(-1)",
                }}
              />

              <img
                src={toastSvg}
                alt='avocaa toast'
                style={{
                  width: "17vw",
                }}
              />
            </Box>
            <Box>
              <img src={sushiSvg} alt='sushi' style={{ width: "17vw" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}>
              <img
                src={SubwaySvg}
                alt='subway'
                style={{
                  width: "17vw",
                  background: "transparent",
                  right: 0,
                }}
              />
              <Box
                sx={{
                  zIndex: 0,
                }}>
                <img
                  src={designRightDesign}
                  alt='design'
                  style={{
                    width: "15vw",
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
                lg: "-18.5rem 0 0 0",
                xl: "-22.5rem 0 0 0",
              },
              alignItems: "center",
            }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
              <img src={OmPng} alt='om' style={{ width: "100%" }} />
            </Grid2>
            <Grid2
              size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
              sx={{ textAlign: "center", transform: "translate3d(0, 0, 0)" }}>
              <img
                src={detailedLogoSvg}
                alt='logo'
                style={{
                  width: "100%",
                  transform: "rotate(90deg)",
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 3.5, lg: 3.5, xl: 3.5 }}>
              <img src={juicePng} alt='juice' />
            </Grid2>
          </Grid2>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100%",
          }}>
          <img
            src={tempSvg}
            style={{ width: "100%", transform: "translate3d(0, 0, 0)" }}
          />
        </Box>
      )}
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
