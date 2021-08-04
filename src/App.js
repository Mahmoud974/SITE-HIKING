// import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LetS from "./pages/LetS";
import Discount from "./pages/Discount";
import Hiking from "./pages/Hiking";

import Footer from "./pages/Footer";
import TitleOne from "./pages/TitleOne";

function App() {
  return (
    <div classNameName="App">
      <Home />
      <LetS />
      <Discount />
      <Hiking />

      <TitleOne />
      <Footer />
    </div>
  );
}

export default App;
