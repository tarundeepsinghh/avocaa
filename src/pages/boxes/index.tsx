import { FadeText } from "@/@/components/magicui/fade-text";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Twoboxes from "../../assets/2.png";
import Fourboxes from "../../assets/4.png";
import { PriceComponent } from "./box.component";
import { list } from "./list";

export function BoxComponent() {
  const theme = useTheme();
  const ismdUp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
        <Link to={`https://wa.me/+918130352989?text=${list[0].link}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img src={Twoboxes} alt='two boxes' />
          </div>
        </Link>
      </Grid2>
      {ismdUp && (
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <PriceComponent {...list[0]} />
        </Grid2>
      )}
      <Grid2 size={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 4 }}>
        {!ismdUp && (
          <Grid2
            container
            spacing={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {list.map(({ title, discription, link }, index) => (
              <Grid2
                size={{
                  xs: 0,
                  sm: 0,
                  md: 0,
                  lg: 6,
                  xl: 6,
                }}>
                <FadeText
                  direction={index % 2 === 0 ? "left" : "right"}
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text={<PriceComponent {...{ title, discription, link }} />}
                />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
        <Link to={`https://wa.me/+918130352989?text=${list[1].link}`}>
          <div
            style={{
              width: "100%",
              height: ismdUp ? "150%" : "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img
              src={Fourboxes}
              style={{
                width: ismdUp ? "80%" : "70%",
                height: ismdUp ? "80%" : "50%",
              }}
              alt='four boxes'
            />
          </div>
        </Link>
      </Grid2>
      {ismdUp && (
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} sx={{ marginTop: "6rem" }}>
          <PriceComponent {...list[1]} />
        </Grid2>
      )}
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
