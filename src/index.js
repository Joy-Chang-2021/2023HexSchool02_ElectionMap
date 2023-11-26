import React from 'react';
import ReactDOM from 'react-dom/client';
import Chakra from "components/Theme"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"


ChartJS.register(ArcElement)
// ChartJS.register(ArcElement, Tooltip, Legend)
// ChartJS.overrides.doughnut.plugins.legend = {
//   display: false, // 隱藏圖例
// }
// ChartJS.overrides.doughnut.plugins.tooltip = {
//   enabled: false, // 隱藏圖例
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chakra>
      <App />
    </Chakra>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
