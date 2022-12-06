import React  from "react";
import { createRoot  } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './app/App';
import './styles/styles.css'

import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
