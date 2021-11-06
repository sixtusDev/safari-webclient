import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
