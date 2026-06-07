import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import App from './App';
import Car from './Car';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



const anotherRoot = ReactDOM.createRoot(document.getElementById('anotherRoot'));
anotherRoot.render(
  <React.StrictMode>
    <>
      <Car brand="BMW" price="5cr" />
    </>
  </React.StrictMode>
)

reportWebVitals();

