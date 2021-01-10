import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/Main';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') 
);
