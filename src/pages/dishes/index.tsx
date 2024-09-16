import { FadeText } from "@/@/components/magicui/fade-text";
import { SubTitleHeader, TitleHeader } from "@/components/TitleHeader";
import VideoComponent from "@/components/VideoComponent";
import { Box, Grid2 } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Dishes } from "./dishes";
import crate from "../../assets/4.svg";

export function DishesComponent({ landing = false }) {
  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{ margin: landing ? "2rem" : "0 2rem", alignItems: "center" }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FadeText
            direction='right'
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={crate} alt='design' style={{ width: "20vw" }} />
                <TitleHeader>Recipes</TitleHeader>
              </Box>
            }
          />
        </Grid2>
      </Grid2>
      {Dishes.map(({ id, title, desc, yt, vId }) => (
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: id % 2 === 0 ? "row-reverse" : "row",
            margin: "0 2rem",
          }}>
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 4.5,
              xl: 4.5,
            }}>
            <VideoComponent yt={yt} title={title} thumbnailSrc={vId} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <FadeText
              direction={id % 2 === 0 ? "right" : "left"}
              framerProps={{
                show: { transition: { whileInView: { delay: 0.2 } } },
              }}
              text={
                <Grid2 textAlign={id % 2 === 0 ? "right" : "left"}>
                  <SubTitleHeader sx={{ fontSize: "1.5rem" }}>
                    {title}
                  </SubTitleHeader>
                  {desc}
                </Grid2>
              }
            />
          </Grid2>
        </Grid2>
      ))}
    </>
  );
}

// If you want to customize the Component display name in React dev tools:
DishesComponent.displayName = "LandingPage";

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

ErrorBoundary.displayName = "LandingErrorBoundary";
