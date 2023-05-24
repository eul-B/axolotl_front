import React from 'react';
import './Modal.css';

const Modal = (props) => {

  return (
    <div>
  <body>
    <h1>Simple Modal Test</h1>
    <button id="open-modal">Open Modal</button>

    <div class="modal-wrapper">
      <div class="modal">
      <div class="close-modal">
          <button id="close-modal">X</button>
        </div>
        <h1>Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptate, culpa possimus odit ratione reprehenderit asperiores
          distinctio animi numquam sequi nisi velit perferendis sit neque
          ducimus ad dolorem, architecto illum.
        </p>
      </div>
    </div>

    <script src="src/index.js"></script>
  </body>
    </div>
  );
};


export default Modal