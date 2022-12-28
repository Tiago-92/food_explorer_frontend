import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Details } from '../pages/Details';
import { CreateDish } from '../pages/CreateDish';
import { EditDish } from '../pages/EditDish';
import { FinalizeOrder } from '../pages/FinalizeOrder';
import { ShowOrders } from '../pages/ShowOrders';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/details/:id" element={<Details />} />
         <Route path="/create" element={<CreateDish />} />
         <Route path="/edit/:id" element={<EditDish />} />
         <Route path="/orders" element={<ShowOrders />} />
         <Route path="/finalize" element={<FinalizeOrder />} />
      </Routes>
   )
}