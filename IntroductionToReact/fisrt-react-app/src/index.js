import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* const name=`harsh`;
const myelement=<h1>this is JSX! and my name is {name}</h1>
root.render(myelement); */

/* const myelement=(
  <>
    <li>this is me</li>
    <li>this is you</li>
    <li>this is you</li>
  </>
);
root.render(myelement); */

/* function Card() {
  
  return(
    <div>
      <h1>my name is harshdeep</h1>
      <p>harsh@gamil.com</p>
    </div>
  );
}
root.render(<Card />); */

/* function MyClock(){
  root.render(
    <p>{new Date().toLocaleTimeString()}</p>
  );
  setTimeout(MyClock,1000);
} */

// root.render(<MyClock />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//to create react app type  npx create-react-app react_app_name
//to run react app type
//                    cd react_app_name
//                    npm start

