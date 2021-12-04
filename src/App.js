import { Route, BrowserRouter } from "react-router-dom";
// import { Switch } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Clothes from "./pages/clothes/Clothes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Clothes />
        {/* <BrowserRouter> */}
        {/* <Switch> */}
        {/* <div>
          <Route path="/" component={Home} exact />
          <Route path="/clothes" component={Clothes} exact />
        </div> */}
        {/* </Switch> */}
        {/* </BrowserRouter> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
