import { Switch, Route, BrowserRouter } from "react-router-dom";

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
        <BrowserRouter>
          <Switch>
            <div>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/clothes" exact>
                <Clothes />
              </Route>
            </div>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
