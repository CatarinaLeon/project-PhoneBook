import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/Auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
