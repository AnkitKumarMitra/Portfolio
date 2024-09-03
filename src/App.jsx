import React from "react";
import "./App.css";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";
import Details from "./components/Details";
import Footer from "./components/Footer";
export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Particle />
      <Details />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}
