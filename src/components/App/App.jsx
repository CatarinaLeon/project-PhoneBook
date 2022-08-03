import { useEffect, useState, Suspense } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HeaderNav from "../Header/HeaderNav/HeaderNav";

import HomeView from "../../views/HomeView/HomeView";
import RegisterView from "../../views/RegisterView/RegisterView";
import LoginView from "../../views/LoginView/LoginView";
import ContactsView from "../../views/ContactsView/ContactsView";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

import authOperations from "../../redux/Auth/auth-operations";
import authSelectors from "../../redux/Auth/auth-selectors";

import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import Loader from "../../common/Loader/Loader";
import Footer from "../Footer/Footer";

import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import * as storage from "../../services/localStorage";

const App = () => {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const dispatch = useDispatch();

  const [theme, setTheme] = useState(
    () => storage.get("theme") ?? themes.light
  );

  //локал сторадж
  useEffect(() => {
    storage.save("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Suspense fallback={<Loader />}>
            <HeaderNav />
            <Section>
              <Container>
                <Switch fallback={<Loader />}>
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

                  <PrivateRoute exact path="/contacts" redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                </Switch>
              </Container>
            </Section>
            <Footer />
          </Suspense>
        </ThemeContext.Provider>
      )}
    </>
  );
};
export default App;
