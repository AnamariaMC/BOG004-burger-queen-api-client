import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//-------- importamos las vistas -------- :apuntando_hacia_abajo:

import Formulario from './pages/login.jsx';
import Chef from './pages/chef.jsx';
import Waiter from './pages/waiter.jsx';
import Admin  from './pages/admin.jsx';


const routes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Formulario/>}></Route>
            <Route path='waiter' element={<Waiter/>}></Route>
            <Route path='chef' element={<Chef/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>
            <Route path='*' element={<Navigate to={"/"} />}></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default routes;
