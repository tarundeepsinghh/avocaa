import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  CircularProgress,
  Divider,
  Grid2,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { lazy, Suspense } from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import designRightDesign from "../../assets/design-left.svg";
import { IntroComponent } from "../introduction";

export function Component() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  const HealthBenefitPage = lazy(() =>
    import("../health").then((module) => ({
      default: module.HealthBenefitsComponent,
    }))
  );

  const DishesPage = lazy(() =>
    import("../dishes").then((module) => ({
      default: module.DishesComponent,
    }))
  );

  const BoxesPage = lazy(() =>
    import("../boxes").then((module) => ({
      default: module.BoxComponent,
    }))
  );

  return (
    <Box>
      <IntroComponent />
      <Box sx={{ marginTop: ismdUp ? "1rem" : "2rem" }}>
        <Suspense
          fallback={
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              style={{ height: "100vh" }}>
              <Box textAlign='center'>
                <CircularProgress title='progress loader' />
                <p>Loading...</p>
              </Box>
            </Box>
          }>
          <BoxesPage />
        </Suspense>
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <Suspense
          fallback={
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              style={{ height: "100vh" }}>
              <Box textAlign='center'>
                <CircularProgress title='progress loader' />
                <p>Loading...</p>
              </Box>
            </Box>
          }>
          <HealthBenefitPage landing />
        </Suspense>
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <Suspense
          fallback={
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              style={{ height: "100vh" }}>
              <Box textAlign='center'>
                <CircularProgress title='progress loader' />
                <p>Loading...</p>
              </Box>
            </Box>
          }>
          <DishesPage />
        </Suspense>
      </Box>
      <Grid2 container sx={{ marginTop: "5rem" }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            marginTop: "2rem",
            marginBottom: "1rem",
          }}>
          <Divider
            sx={{
              backgroundColor: "#BBC163",
              height: "4px",
            }}
            variant='middle'
          />
        </Grid2>
        <Grid2 size={{ xs: 2 }}></Grid2>
        <Grid2
          size={{ xs: 9.5 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}>
          <Link to='https://wa.me/918130352989'>
            <WhatsAppIcon
              sx={{ color: "#25D366", fontSize: "4rem", cursor: "pointer" }}
            />
          </Link>
          <Link to='https://www.instagram.com/weavocaa?igsh=MWFkdGMxMTVkNGt1Ng=='>
            <InstagramIcon
              sx={{
                fontSize: "3.8rem",
                cursor: "pointer",
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                borderRadius: "15px",
                color: "#fff",
              }}
            />
          </Link>
        </Grid2>
        <Grid2 size={{ xs: 0.5 }}></Grid2>
      </Grid2>
      {!ismdUp && (
        <img
          src={designRightDesign}
          alt='design'
          style={{
            width: "15vw",
            background: "transparent",
            transform: "scaleY(-1)",
            marginTop: "-10rem",
          }}
        />
      )}
    </Box>
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
