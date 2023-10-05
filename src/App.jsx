import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Slider } from "./components/Slider";
import { Product } from "./components/Product5";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Slider></Slider>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
