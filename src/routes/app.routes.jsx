import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Details } from '../pages/Details';
import { CreateDish } from '../pages/CreateDish';
import { Order } from '../pages/Order';
import { FinalizeOrder } from '../pages/FinalizeOrder';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/details/:id" element={<Details />} />
         <Route path="/create" element={<CreateDish />} />
         <Route path="/order" element={<Order />} />
         <Route path="/finalize" element={<FinalizeOrder />} />
      </Routes>
   )
}