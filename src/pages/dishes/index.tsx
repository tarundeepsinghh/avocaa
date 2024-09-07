import { FadeText } from "@/@/components/magicui/fade-text";
import { SubTitleHeader, TitleHeader } from "@/components/TitleHeader";
import VideoComponent from "@/components/VideoComponent";
import { Grid2 } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Dishes } from "./dishes";

export function DishesComponent() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{ margin: "2rem", alignItems: "center" }}>
        <Grid2 size={{ xs: 12 }} sx={{ textAlign: "right" }}>
          <FadeText
            direction='right'
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text={<TitleHeader>Recipes</TitleHeader>}
          />
        </Grid2>
      </Grid2>
      {Dishes.map(({ id, title, desc, yt }) => (
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
              lg: 3,
              xl: 3,
            }}>
            <VideoComponent yt={yt} title={title} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 9, xl: 9 }}>
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
