import React from 'react';

import './App.css';

import{ Provider } from 'react-redux';
import { store } from './store/ListReducer';

import List from './Components/List';
import Input from './Components/InputGrocery';



function App() {
  return (
    <Provider store={store}>
      
      <div className="App">
      <h1>Personal Grocery List</h1>
      <div className='section-center'>
        <Input />
        <List />
        </div>
      </div>
    </Provider>
  );
}

export default App;