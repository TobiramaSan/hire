import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Pricing from "./pages/pricing/pricing";
import Login from "./pages/login/login";
import AdminPageOne from "./pages/admin/admin-page1/adminPage1";
// import AdminPageTwo from "./pages/admin/admin-page2/adminPage2";
// import AdminPageThree from "./pages/admin/admin-page3/adminPage3";
import Register from "./pages/register/register";
import Advertise from "./pages/advertise/advertise";
import Works from "./pages/works/works";
import RegisterMulti from "./pages/register-multi/registerMulti";
import Verify from "./pages/verify/verify";
import EmployeeDashboard from "./pages/employee/employee-dashboard/employeeDashboard";
import EmployeeJob from "./pages/employee/employee-job/employeeJob";
import EmployeeApplicants from "./pages/employee/employee-applicants/employeeApplicants";
import EmployeeProfile from "./pages/employee/employee-profile/employeeProfile";
import JobCategories from "./pages/job-categories/jobCategories";
import JobType from "./pages/job-type/jobType";
import EmployeeAddProfile from "./pages/employee/employee-addprofile/employeeAddProfile";
import EmployeePackages from "./pages/employee/employee-packages/employeePackages";
import EmployeePost from "./pages/employee/employee-post/employeePost";
import EmployeeInvoice from "./pages/employee/employee-invoice/employeeInvoice";
import EmployeePayments from "./pages/employee/employee-payment/employeePayment";
import EmployeeEditProfile from "./pages/employee/employee-editprofile/employeeEditProfile";
import CandidateDashboard from "./pages/candidate-dashboard/candidateDashboard";
function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <AnimatePresence>
      <motion.div
        key={Route}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/find-jobs" element={<JobCategories />} />
            <Route path="/job-type" element={<JobType />} />
            <Route path="/register-multi" element={<RegisterMulti />} />
            <Route path="/admin" element={<AdminPageOne />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/works" element={<Works />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            <Route path="/employee-job" element={<EmployeeJob />} />
            <Route
              path="/employee-applicants"
              element={<EmployeeApplicants />}
            />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route
              path="/employee-add-profile"
              element={<EmployeeAddProfile />}
            />
            <Route
              path="/employee-edit-profile"
              element={<EmployeeEditProfile />}
            />
            <Route path="/employee-packages" element={<EmployeePackages />} />
            <Route path="/employee-invoice" element={<EmployeeInvoice />} />
            <Route path="/employee-payment" element={<EmployeePayments />} />
            <Route path="/employee-post-job" element={<EmployeePost />} />
            <Route
              path="/candidate-dashboard"
              element={<CandidateDashboard />}
            />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
