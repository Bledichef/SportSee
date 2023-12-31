import React from 'react';
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';

import App from './App';
import "./styles/_index.scss"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );

//ReactDOM.render(<App />, document.getElementById('root'))