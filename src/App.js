import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./components/LogIn";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import VerificationCode from "./components/VerificationCode";
import Dashboard from "./components/Dashboard";
import Organizations from "./components/Organizations";
import Admins from "./components/Admins";
import Complaints from "./components/Complaints";
import SuperAdmin from "./components/SuperAdmin";
import Employee from "./components/Employee";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Requests from "./components/Requests";
import AddOrganizationForm from "./components/AddOrganizationForm";
import OrganizationsDetails from "./components/OrganizationsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verification" element={<VerificationCode />} />
          <Route path="super-admin" element={<SuperAdmin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="organizations" element={<Organizations />}>
              <Route path="" element={<OrganizationsDetails />} />
              <Route
                path="add-organization"
                element={<AddOrganizationForm />}
              />
            </Route>
            <Route path="admins" element={<Admins />} />
            <Route path="complaints" element={<Complaints />} />
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
