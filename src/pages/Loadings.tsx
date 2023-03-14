import React from "react";
import Loading from "../components/Loading";
import "./../stylesheets/loadings.scss";

const Loadings = () => {
  const types = ["bars", "bubbles", "cubes", "cylon", "spin", "spinningBubbles", "spokes"];

  return (
    <div className="App">
      <h1>Reusable loading component</h1>

      <small>
        created by{" "}
        <a href="https://github.com/KelvinYou" target="_blank" rel="noreferrer">
          Kelvin You
        </a>
      </small>

      <div className="loadings">
        <div className="loading-container">
          <Loading />
          <p>{"<Loading /> / <Loading type=\"balls\"/>"}</p>
        </div>

        {types.map((type, index) => (
          <div key={type+index} className="loading-container">
            <Loading type={type}/>
            <p>{"<Loading type=\"" + type + "\"/>"}</p>
          </div>
        ))}
        
      </div>
      
      

    </div>
  )
}

export default Loadings;