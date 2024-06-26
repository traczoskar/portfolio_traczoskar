import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { themeDark, themeLight } from "./app/theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./slices/themeSlice";
import AnimatedRoutes from "./app/AnimatedRoutes/AnimatedRoutes";
import ScrollToTopButton from "./common/ScrollToTopButton";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <ScrollToTopButton />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
