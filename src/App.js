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
            <Route path="organizations" element={<Organizations />} />
            <Route path="admins" element={<Admins />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
