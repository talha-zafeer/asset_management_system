import "./App.css";
import Home from "./Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./LogIn";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
import VerificationCode from "./VerificationCode";
import Dashboard from "./Dashboard";
import Organizations from "./Organizations";
import Admins from "./Admins";
import Complaints from "./Complaints";
import SuperAdmin from "./SuperAdmin";
import Employee from "./Employee";
import EmployeeDashboard from "./EmployeeDashboard";
import Requests from "./Requests";
import AddOrganizationForm from "./AddOrganizationForm";
import OrganizationsDetails from "./OrganizationsDetails";

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
