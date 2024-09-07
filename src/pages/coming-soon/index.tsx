import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ComingSoon() {
  return <></>;
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
