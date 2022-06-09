import { Routes, Route, Navigate } from 'react-router-dom';
//importamos vistas
import Chef from '../pages/chef.jsx';
import Waiter from '../pages/waiter.jsx';
import Admin  from '../pages/admin.jsx';
import Order from '../componentsWaiter/order.jsx';
import List from '../componentsWaiter/list.jsx';



export const RoutesId = () => {
  const session = JSON.parse(sessionStorage.getItem('user'));
  return (    
        <Routes>      
          {
          session.user.roles.waiter ? (
            <Route path='waiter' element={<Waiter/>}>
              <Route index element={<Order/>}></Route>
              <Route path='/waiter/list' element={<List/>}></Route>
              <Route path='/waiter/order' element={<Order/>}></Route>
            </Route>
          ) : null
        }
        {
          session.user.roles.chef ? (
            <Route path='chef' element={<Chef/>}></Route>
          ) : null
        }
        {
          session.user.roles.admin ? (
            <Route path='admin' element={<Admin/>}></Route>
          ) : null
        }                      
            <Route path='*' element={<Navigate to={"/"} />}></Route>
        </Routes>    
  );
}
