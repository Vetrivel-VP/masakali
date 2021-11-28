import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { OurTopDishes } from "./Components/OurTopDishes";

function App() {
  return (
    <div className="App">
      <Home />
      <OurTopDishes />
    </div>
  );
}

export default App;
