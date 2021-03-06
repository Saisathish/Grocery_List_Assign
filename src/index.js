import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://df766659db9143a4a5ab33444393744e@o1078306.ingest.sentry.io/6081916",
  integrations: [new Integrations.BrowserTracing()],
  environment: "development",
  debug: true,
  release: "grocery-list-app@1.1.11",
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
