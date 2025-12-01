import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landingpage from ".././src/components/Landingpages/Landingpage";
import CarrersLayout from ".././src/components/Carrers/CarrersLayout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/carrerlayout" element={<CarrersLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
