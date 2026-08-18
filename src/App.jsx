import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import { startTransition } from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <Counter />
  );
}

export default App;