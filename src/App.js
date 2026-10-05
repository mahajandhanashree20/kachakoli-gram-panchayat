import React from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoCards from "./components/InfoCards";
import About from "./components/About";
import Member from "./pages/Members";
import Contact from "./components/Contact";
import Works from "./components/Works";

import "./App.css";


function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
    </>
  );
}


function App() {
  return (
    <div className="app">

      {/* TOP CONTACT BAR */}

      <TopBar />

      {/* MAIN NAVBAR */}

      <Navbar />


      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/committee"
          element={<Member />}
        />

        <Route
          path="/works"
          element={<Works />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </div>
  );
}

export default App;