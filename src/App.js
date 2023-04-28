import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./auth/log-in/LogIn";
import ResetPassword from "./auth/reset-password/ResetPassword";
import ForgotPassword from "./auth/forgot-password/ForgotPassword";
import VerificationCode from "./auth/verification-code/VerificationCode";
import Dashboard from "./components/Dashboard";
import Organizations from "./components/Organizations";
import Admins from "./components/Admins";
import Complaints from "./components/Complaints";
import SuperAdmin from "./components/SuperAdmin";
import Employee from "./components/Employee";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Requests from "./pages/employee/Requests/Requests";
import AddOrganizationForm from "./components/AddOrganizationForm";
import OrganizationsDetailsPage from "./pages/super-admin/Organizations/OrganizationsDetails";
import ViewOrganization from "./pages/super-admin/Organizations/ViewOrganizaion";
import Admin from "./components/Admin";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import Vendors from "./pages/admin/Vendors/Vendors";
import Inventory from "./pages/admin/inventory/Inventory";
import Categories from "./pages/admin/Categories/Categories";
import Employees from "./pages/admin/Employees/Employees";
import AddInventory from "./pages/admin/inventory/AddInventory";
import InventoryDetailsPage from "./pages/admin/inventory/InventoryDetailsPage";
import EmployeeDetails from "./pages/admin/Employees/EmployeeDetails";
import AddEmployee from "./pages/admin/Employees/AddEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="send-otp" element={<VerificationCode />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verification" element={<VerificationCode />} />
          <Route path="super-admin" element={<SuperAdmin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="organizations" element={<Organizations />}>
              <Route path="" element={<OrganizationsDetailsPage />} />
              <Route path="details/:id" element={<ViewOrganization />} />
              <Route
                path="add-organization"
                element={<AddOrganizationForm />}
              />
            </Route>
            <Route path="admins" element={<Admins />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="inventory" element={<Inventory />}>
              <Route path="" element={<InventoryDetailsPage />}></Route>
              <Route path="add-inventory" element={<AddInventory />}></Route>
            </Route>
            <Route path="categories" element={<Categories />} />
            <Route path="vendors" element={<Vendors />}></Route>
            <Route path="employees" element={<Employees />}>
              <Route path="" element={<EmployeeDetails />}></Route>
              <Route path="add-employee" element={<AddEmployee />}></Route>
            </Route>
          </Route>
          <Route path="employee" element={<Employee />}>
            <Route path="dashboard" element={<EmployeeDashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
