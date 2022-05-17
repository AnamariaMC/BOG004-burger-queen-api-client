import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//-------- importamos las vistas -------- :apuntando_hacia_abajo:

import Login from './pages/login';
import Chef from './pages/chef';
import Waiter from './pages/waiter';
import Admin  from './pages/admin';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            
            <Route path='/' element={<Login/>}></Route>
            <Route path='waiter' element={<Waiter/>}></Route>
            <Route path='chef' element={<Chef/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>
            <Route path='*' element={<Navigate to={"/"} />}></Route>
        </Routes>
    </BrowserRouter>
)