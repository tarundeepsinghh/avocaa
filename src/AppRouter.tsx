import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { DashboardLayout } from "./layout/dashboard";
import NotFoundPage from "./pages/not-found";
import LandingSkeleton from "./skeleton/landing.skeleton";

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

  const DishesPage = lazy(() =>
    import("./pages/dishes").then((module) => ({
      default: module.DishesComponent,
    }))
  );

  const BoxesPage = lazy(() =>
    import("./pages/boxes").then((module) => ({
      default: module.BoxComponent,
    }))
  );

  const InternationalServingPage = lazy(() =>
    import("./pages/international-serving").then((module) => ({
      default: module.IntroComponent,
    }))
  );
  const AboutUsPage = lazy(() =>
    import("./pages/about-us").then((module) => ({
      default: module.Component,
    }))
  );
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/coming-soon'
          element={<Navigate to='/dashboard' replace />}
        />
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/' element={<DashboardLayout />}>
          <Route
            path='dashboard'
            element={
              <Suspense fallback={<LandingSkeleton />}>
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
          <Route
            path='/dishes'
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
                <DishesPage />
              </Suspense>
            }
          />
          <Route
            path='/boxes'
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
                <BoxesPage />
              </Suspense>
            }
          />
          <Route
            path='/international-serving'
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
                <InternationalServingPage />
              </Suspense>
            }
          />
          <Route
            path='/about-us'
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
                <AboutUsPage />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </>
    )
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
