import BlurFade from "@/@/components/magicui/blur-fade";
import { FadeText } from "@/@/components/magicui/fade-text";
import { TitleHeader } from "@/components/TitleHeader";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { HealthBenefits } from "./health-benefits";

export function HealthBenefitsComponent({ landing = false }) {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        margin: landing ? "0 2rem" : "2rem",
        alignItems: "center",
      }}>
      <Grid2
        size={{
          xs: 12,
          sm: 12,
          md: landing ? 6 : 12,
          lg: landing ? 6 : 12,
          xl: landing ? 6 : 12,
        }}>
        <BlurFade delay={0.25} inView>
          <TitleHeader sx={{ lineHeight: "0.7em" }}>
            Health Benefits
          </TitleHeader>
        </BlurFade>
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          sm: 12,
          md: landing ? 6 : 12,
          lg: landing ? 6 : 12,
          xl: landing ? 6 : 12,
        }}>
        {HealthBenefits.map((benefit, index) => (
          <FadeText
            direction='left'
            framerProps={{
              show: { transition: { delay: 0.4 * index } },
            }}
            text={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#BBC163",
                  ml: landing ? (ismdUp ? index * 3 : 0) : 0,
                }}>
                <DoneAllRoundedIcon sx={{ fontSize: "2em" }} />
                <Typography sx={{ ml: 0.5, fontSize: "1.7em" }}>
                  {benefit}
                </Typography>
              </Box>
            }
          />
        ))}
      </Grid2>
    </Grid2>
  );
}

// If you want to customize the component display name in React dev tools:
HealthBenefitsComponent.displayName = "HealthBenefitsPage";

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

ErrorBoundary.displayName = "HealthBenefitsErrorBoundary";
