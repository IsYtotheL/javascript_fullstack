import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Demo1 from './component/useState/indexHook'
//import Example from './component/useEffect/makeUnmount'
// import Demo3 from './component/useContext/indexHook'
// import Demo4 from './component/useReducer/index'
// import Demo5 from './component/useMemo/index'
import Demo6 from './component/useRef/anotherUse'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Demo6 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
