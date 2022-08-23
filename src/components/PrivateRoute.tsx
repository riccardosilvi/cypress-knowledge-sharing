import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LOGIN_PATH } from "../routes";

export function PrivateRoute({ children, ...rest }: RouteProps) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
