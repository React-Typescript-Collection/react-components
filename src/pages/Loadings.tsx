import React from "react";
import Loading from "../components/Loading";
import "./../stylesheets/loadings.scss";

const Loadings = () => {
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
          <p>{"<Loading /> / <Loading type=\"balls\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="bars"/>
          <p>{"<Loading type=\"bars\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="bubbles"/>
          <p>{"<Loading type=\"bubbles\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="cubes"/>
          <p>{"<Loading type=\"cubes\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="cylon"/>
          <p>{"<Loading type=\"cylon\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="spin"/>
          <p>{"<Loading type=\"spin\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="spinningBubbles"/>
          <p>{"<Loading type=\"spinningBubbles\">"}</p>
        </div>

        <div className="loading-container">
          <Loading type="spokes"/>
          <p>{"<Loading type=\"spokes\">"}</p>
        </div>
      </div>
      
      

    </div>
  )
}

export default Loadings;