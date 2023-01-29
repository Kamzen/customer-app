import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AddCustomer from "../pages/AddCustomer";
import CustomersList from "../pages/CustomersList";
import EditCustomer from "../pages/EditCustomer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<CustomersList />} path="/" />
      <Route element={<AddCustomer />} path="/addCustomer" />
      <Route element={<EditCustomer />} path="/editCustomer/:id" />
    </Route>
  )
);

export default router;
