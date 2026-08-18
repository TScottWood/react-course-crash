import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import { startTransition } from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
    </div>
  );
}

export default App;