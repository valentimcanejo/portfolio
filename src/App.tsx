import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="head">
        <Header />
        <h1>
          Welcome To My <br />
          Personal Portfolio
        </h1>
        <h2>
          Hello, my name is Rômulo Valentim and I'm a Front-end Developer,
          currently studying React, Typescript and Java
        </h2>
        <h3>Projects</h3>
      </div>

      <Cards />

      {/* <div className="app">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Calculadora</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Desafio-Dexkit</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Desafio-NAVI</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Calculadora</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Calculadora</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Calculadora</h1>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
