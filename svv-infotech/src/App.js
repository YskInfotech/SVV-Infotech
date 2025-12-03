import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from ".././src/components/Landingpages/Landingpage";
import CarrersLayout from ".././src/components/Carrers/CarrersLayout";
import Itservices from ".././src/components/Services/Itservices";
import CarrerRoutes from './components/Carrers/CarrerRoutes';
import Staffing from './components/Services/Staffing';
import DashboardLayout from ".././src/components/AdminDashboard/DashboardLayout";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard/*" element={<DashboardLayout/>} />
        <Route path="/carrerlayout" element={<CarrersLayout />} />
         <Route path="/carrerroutes/*" element={<CarrerRoutes/>} />
         <Route path="/itservices" element={<Itservices/>} />
         <Route path="/staffing" element={<Staffing/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
