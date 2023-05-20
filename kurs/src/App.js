import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
return (<div className="App">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/about" element={<About />} />
</Routes>
</div>
);
}
export default App;