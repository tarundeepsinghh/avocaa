import { SubTitleHeader } from "@/components/TitleHeader";
import { Divider, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Twoboxes from "../../assets/2.svg";
import Fourboxes from "../../assets/4.svg";

export function BoxComponent() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
        <img
          src={Twoboxes}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          alt='two boxes'
        />
      </Grid2>
      {!ismdUp && (
        <Grid2 size={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 4 }}>
          <Grid2 container spacing={2}>
            <Grid2
              size={{
                xs: 0,
                sm: 0,
                md: 0,
                lg: isHovered1 ? 6 : isHovered2 ? 4 : 6,
                xl: isHovered1 ? 6 : isHovered2 ? 4 : 6,
              }}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}>
              <SubTitleHeader
                sx={{
                  textAlign: "center",
                  fontSize: isHovered1 ? "5em" : isHovered2 ? "3em" : "4em",
                }}>
                Box of 2
              </SubTitleHeader>
            </Grid2>
            <Divider orientation='vertical' variant='middle' />
            <Grid2
              size={{
                xs: 0,
                sm: 0,
                md: 0,
                lg: isHovered2 ? 6 : isHovered1 ? 4 : 6,
                xl: isHovered2 ? 6 : isHovered1 ? 4 : 6,
              }}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}>
              <SubTitleHeader
                sx={{
                  textAlign: "center",
                  fontSize: isHovered2 ? "5em" : isHovered1 ? "3em" : "4em",
                }}>
                Box of 4
              </SubTitleHeader>
            </Grid2>
          </Grid2>
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
        <img
          src={Fourboxes}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          alt='four boxes'
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
