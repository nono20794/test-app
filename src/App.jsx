import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import ATroop from "./components/pages/ATroop";
import BTroop from "./components/pages/BTroop";
import CTroop from "./components/pages/CTroop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/test-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="atroop" element={<ATroop />} />
            <Route path="btroop" element={<BTroop />} />
            <Route path="ctroop" element={<CTroop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
