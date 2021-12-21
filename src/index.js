import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import css from '../src/styles.css'




// ReactDOM.render(<App />, document.querySelector('#root'))



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
