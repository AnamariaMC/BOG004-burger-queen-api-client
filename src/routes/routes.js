import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesId } from './routesId.js'
import Formulario from '../pages/login.jsx';

const routes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Formulario/>}></Route>
            <Route path='/*' element={<RoutesId/>}></Route>          
        </Routes>
    </BrowserRouter>
  );
}
export default routes;
