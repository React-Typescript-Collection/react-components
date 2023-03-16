import React, { useState } from 'react';
import AppModal from '../components/Modal';

const Modals = () => {

  return (
    <div className="App">
      <h1>Reusable modal component</h1>
      <p>Using third party react-modal</p>
      <small>
        created by{" "}
        <a href="https://github.com/KelvinYou" target="_blank" rel="noreferrer">
          Kelvin You
        </a>
      </small>

      <br/>
      <br/>
      <br/>
      <AppModal
        isOpen={false}
        onClose={() => {}}
      />
    </div>
  )
}

export default Modals