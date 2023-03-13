import React from "react";
import Button from "./../components/Button";

const Buttons = () => {
  return (
    <div className="App">
      <h1>Reusable button component</h1>

      <small>
        created by{" "}
        <a href="https://github.com/KelvinYou" target="_blank" rel="noreferrer">
          Kelvin You
        </a>
      </small>
      
      <div className="buttons">
        <div className="button-container">
          <div>
            <Button />
          </div>
          <p>{"<Button />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="outlined" />
          </div>
          <p>{"<Button variant='outlined' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="text" />
          </div>
          <p>{"<Button variant='text' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button disableShadow />
          </div>
          <p>{"<Button disableShadow />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button disabled />
          </div>
          <p>{"<Button disabled />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="text" disabled />
          </div>
          <p>{"<Button variant='text' disabled />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="primary" content="primary" />
          </div>
          <p>{"<Button color='primary' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="secondary" content="secondary" />
          </div>
          <p>{"<Button color='secondary' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="danger" content="danger" />
          </div>
          <p>{"<Button color='danger' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button startIcon="launch" color="primary" />
          </div>
          <p>{"<Button end_icon='launch' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button endIcon="arrow_circle_down" color="primary" />
          </div>
          <p>{"<Button end_icon='arrow_circle_down' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button startIcon="star" color="primary" />
          </div>
          <p>{"<Button start_icon='star' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button size="large" color="primary" />
          </div>
          <p>{"<Button size='lg' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button size="small" color="primary" />
          </div>
          <p>{"<Button size='sm' />"}</p>
        </div>
      </div>
    </div>
  )
}

export default Buttons;