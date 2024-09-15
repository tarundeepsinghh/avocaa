import { Box, useMediaQuery } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { DishesComponent } from "../dishes";
import { HealthBenefitsComponent } from "../health";
import { IntroComponent } from "../introduction";
import { BoxComponent } from "../boxes";
import { useTheme } from "@mui/material";

export function Component() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box>
        <IntroComponent />
      </Box>
      <Box sx={{ marginTop: ismdUp ? "1rem" : "2rem" }}>
        <HealthBenefitsComponent landing />
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <DishesComponent />
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <BoxComponent />
      </Box>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "LandingPage";

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
