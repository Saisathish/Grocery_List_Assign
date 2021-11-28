import React from 'react';

import './App.css';

import * as Sentry from '@sentry/react';

import{ Provider } from 'react-redux';
import { store } from './store/ListReducer';

import List from './Components/List';
import Input from './Components/InputGrocery';



function App() {
  return (
    <Provider store={store}>
      <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
        <div className="App">
        <h1>Personal Grocery List</h1>
        <div className='section-center'>
          <Input />
          <List />
          </div>
        </div>
      </Sentry.ErrorBoundary>
    </Provider>
  );
}

export default Sentry.withProfiler(App);

function FallbackComponent() {
  return (
    <div>An error has occured</div>
  )
}