import React from "react";
import { useDocumentTitle } from "../hooks";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <div className="App">
      <h1>Reusable component</h1>

      <small>
        created by{" "}
        <a href="https://github.com/KelvinYou" target="_blank" rel="noreferrer">
          Kelvin You
        </a>
      </small>
    </div>
  )
}

export default Home;