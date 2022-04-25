import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {AppRoutes} from './routes/AppRoutes';

export default function App() {
    return (
        <>
            <AppRoutes/>
        </>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))
