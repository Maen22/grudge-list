import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GrudgeProvider } from './GrudgeContext';

import './style.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <GrudgeProvider>
        <App />
    </GrudgeProvider>,
    rootElement
);
