import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/Main';
import {BrowserRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Helmet>
            <title>Kollab</title>
        </Helmet>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') 
);
