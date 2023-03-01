import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import { Provider } from 'react-redux';
 import store from './Redux/Store';
import Header from './components/Header';
import Products from './components/Products';
import Customer from './components/Customer';
import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<App/>} />
                    <Route path="products" element={<Products title="Piano"/>}/>
                    <Route path="customer" element={<Customer name="Siva"/>}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
