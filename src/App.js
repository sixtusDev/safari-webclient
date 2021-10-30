import Header from "./components/header/Header";

import "./App.scss";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
