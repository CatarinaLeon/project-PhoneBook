import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Suspense } from "react";

// import HeaderNav from "../Header/HeaderNav/HeaderNav";

import AppNav from "../AppNav/AppNav";

import HomeView from "../../views/HomeView/HomeView";
import RegisterView from "../../views/RegisterView/RegisterView";
import LoginView from "../../views/LoginView/LoginView";
import ContactsView from "../../views/ContactsView/ContactsView";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import Footer from "../Footer/Footer";

import authOperations from "../../redux/Auth/auth-operations";
import authSelectors from "../../redux/Auth/auth-selectors";
import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";

import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
// import { useLocalStorage } from "react-use";
// const STORAGE = "theme";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  // const [theme, setTheme] = useLocalStorage(STORAGE, themes.light);
  const [theme, setTheme] = useState(themes.light);

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
        <h2>loading...</h2>
      ) : (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Suspense fallback={<h3>Loading...</h3>}>
            {/* <HeaderNav /> */}
            <AppNav />
            <Section>
              <Container>
                <Switch fallback={<h3>Loading...</h3>}>
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
