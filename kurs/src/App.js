import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";


function App() {
return (<div className="App">
  <Header />
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/about" element={<About />} />
</Routes>
<Footer />
</div>
);
}
export default App;