import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import store from './store'

import { Provider } from 'react-redux'
// Provider 连接器连接了store,那么Provider里面所有的组件都具备了使用store里面的内容的权力
const App = (
  <Provider store={store}>
<TodoList/>
  </Provider>
)
ReactDOM.render(App,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
