import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderNav from "../Header/HeaderNav/HeaderNav";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Loader from "../../common/Loader/Loader";

import authOperations from "../../redux/Auth/auth-operations";
import authSelectors from "../../redux/Auth/auth-selectors";

import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import * as storage from "../../services/localStorage";

export default function App() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const dispatch = useDispatch();

  const [theme, setTheme] = useState(
    () => storage.get("theme") ?? themes.light
  );

  //localStorage
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
            <Main />
            <Footer />
          </Suspense>
        </ThemeContext.Provider>
      )}
    </>
  );
}
