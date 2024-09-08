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
import { DashboardLayout } from "./layout/dashboard";

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
      default: module.Component,
    }))
  );

  const InternationalServingPage = lazy(() =>
    import("./pages/international-serving").then((module) => ({
      default: module.IntroComponent,
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
        {/* <Route path='/' element={<Navigate to='/dashboard' replace />} /> */}
        {/* maybe landing not loading issues is because if this commented out then it will load */}
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
        <Route path='/' element={<DashboardLayout />}>
          <Route
            path='dashboard'
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
