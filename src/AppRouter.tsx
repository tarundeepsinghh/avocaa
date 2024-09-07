import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/not-found";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
// import { DashboardLayout } from "./layout/dashboard";

function AppRouter() {
  const LandingPage = lazy(() =>
    import("./pages/landing").then((module) => ({
      default: module.Component,
    }))
  );

  const HealthBenefitPage = lazy(() =>
    import("./pages/health").then((module) => ({
      default: module.HealthBenefitsComponent,
    }))
  );
  const ComingSoonPage = lazy(() =>
    import("./pages/coming-soon").then((module) => ({
      default: module.ComingSoon,
    }))
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navigate to='/coming-soon' replace />} />
        {/* //temp */}
        {/* <Route path='/' element={<Navigate to='/landing' replace />} /> */}
        <Route
          path='coming-soon'
          element={
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
              <ComingSoonPage />
            </Suspense>
          }
        />
        {/* <Route path='/' element={<DashboardLayout />}> */}
        <Route
          path='landing'
          element={
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
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path='/health-benefits'
          element={
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
              <HealthBenefitPage />
            </Suspense>
          }
        />
        {/* </Route> */}
        <Route path='*' element={<NotFoundPage />} />
      </>
    ),
    { basename: "/avocaa" }
  );
  return <RouterProvider router={router} />;
}

export default AppRouter;

{
  /*
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login user="Customer" />
            </PublicRoute>
          }
        />
        <Route
          path="support"
          element={
            <PublicRoute>
              <Login user="Customer Support" />
            </PublicRoute>
          }
        /> */
}
