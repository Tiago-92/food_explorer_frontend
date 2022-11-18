import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Details } from '../pages/Details';
import { EditDish } from '../pages/EditDish';
import { Order } from '../pages/Order';
import { Payment } from '../pages/Payment';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/details/:id" element={<Details />} />
         <Route path="/edit" element={<EditDish />} />
         <Route path="/order" element={<Order />} />
         <Route path="/payment" element={<Payment />} />
      </Routes>
   )
}