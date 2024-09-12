import { Box } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { DishesComponent } from "../dishes";
import { HealthBenefitsComponent } from "../health";
import { IntroComponent } from "../introduction";

export function Component() {
  return (
    <>
      <Box>
        <IntroComponent />
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <HealthBenefitsComponent landing />
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <DishesComponent />
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
