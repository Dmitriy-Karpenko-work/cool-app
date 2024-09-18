import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/main-page/main/main";
import { Header } from "./components/main-page/header/header";
import { Footer } from "./components/main-page/footer/footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Main />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
