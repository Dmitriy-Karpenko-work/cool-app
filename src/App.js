import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/main-page/main/main";
import { Header } from "./components/main-page/header/header";
import { Footer } from "./components/main-page/footer/footer";
import "./App.css";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import store from "./components/Pages/HW/Hw3/storehw3";

const App = () => {
  const { theme } = useTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <div className={`main-content ${theme}`}>
            <Main />
          </div>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
