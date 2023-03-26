import React from 'react';
import AppModal from '../components/Modal';
import { useDocumentTitle } from '../hooks';

const Modals = () => {
  useDocumentTitle("Modals");

  return (
    <div className="App">
      <h1>Reusable modal component</h1>
      <p>Using third party modal from react-bootstrap</p>
      {/* https://react-bootstrap.netlify.app/components/modal/#rb-docs-content */}
      
      <small>
        created by{" "}
        <a href="https://github.com/KelvinYou" target="_blank" rel="noreferrer">
          Kelvin You
        </a>
      </small>

      <br/>
      <br/>
      <AppModal />
    </div>
  )
}

export default Modals;