import { ThemeProvider } from "styled-components";
import { MainRoute } from "./App/Routes/MainRoute";
import { Breadcrumb } from "./Components/Partials/Breadcrumb";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { GlobalStyles } from "./Styles/Global";
import { Theme } from "./Styles/Theme/Theme";

const themeMode = "dark"

function App() {
  return (
    <ThemeProvider theme={Theme({themeMode})}>
      <GlobalStyles />
      <Header />
      <Breadcrumb />
        <MainRoute />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
