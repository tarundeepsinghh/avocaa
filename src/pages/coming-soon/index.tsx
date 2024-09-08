import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ComingSoon() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,
      }}>
      <Typography variant='h1'>Avocaa</Typography>
      <Typography variant={isMd ? "h3" : "h1"}>Coming Soon</Typography>
    </Box>
  );
}

// If you want to customize the Component display name in React dev tools:
ComingSoon.displayName = "ComingSoonPage";

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

ErrorBoundary.displayName = "ComingSoonErrorBoundary";
