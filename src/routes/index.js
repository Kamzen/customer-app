import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CustomersList from "../pages/CustomersList";

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<CustomersList />} path="/" />)
);

export default router;
