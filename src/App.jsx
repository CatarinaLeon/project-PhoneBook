import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Fragment, Suspense } from "react";

import AppBar from "./components/AppBar/AppBar";

import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import authOperations from "./redux/Auth/auth-operations";
import authSelectors from "./redux/Auth/auth-selectors";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h2>loading...</h2>
      ) : (
        <Fragment>
          <AppBar />

          <Switch fallback={<h3>Loading...</h3>}>
            <Suspense>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                restricted
                redirectTo="/contacts"
              >
                <RegisterView />
              </PublicRoute>
              <PrivateRoute
                exact
                path="/contacts"
                restrictedredirectTo="/register"
              >
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Fragment>
      )}
    </>
  );
};
export default App;
