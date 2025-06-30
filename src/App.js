import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import GRC from "./pages/What We Do/GRC/GRC";
import Audit from "./pages/What We Do/audit/Audit";
import Lapsec from "./pages/What We Do/lapsec/Lapsec";
import Services from "./pages/What We Do/services/Services";
import Truck from "./pages/What We Do/truck/Truck";
import Cyber from "./pages/What We Do/cyber/Cyber";
import Robotics from "./pages/What We Do/robotics/Robotics";
// import Products from "./pages/What We do/AI products/AI products";
import AIConsultingService from "./pages/Our Service Offerings/AI Consulting Service/AI Consulting Service";
import DataServices from "./pages/Our Service Offerings/Data Services/DataServices";
import DataStrategy from "./pages/Our Service Offerings/Data Strategy/Data Strategy";
import ERPServices from "./pages/Our Service Offerings/ERP Services/ERP Services";
import TechnoFinancialServices from "./pages/Our Service Offerings/Techno Financial Servies/Techno Financial Services";
import Training from "./pages/Our Service Offerings/Training/Training";
import MicrosoftServices from "./pages/Our Service Offerings/Microsoft Services/Microsoft Services";
import CybersecurityServices from "./pages/Our Service Offerings/Cybersecurity Services/Cybersecurity Services";
import CustomEngineeringServices from "./pages/Our Service Offerings/Custom Engineering Services/Custom Engineering Services";
import GetInTouch from "./pages/Contact Us/Contact Us";
import AboutVardaan from "./pages/About Vardaan/About Vardaan";
import Privacy from "./pages/Privacy/Privacy";
import Cookie from "./pages/Cookie/Cookie";
import Terms from "./pages/Terms/Terms";
import Data from "./pages/Data/Data";
import International from "./pages/International/International";
import "./theme.css"; // if you want consistent styling
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <Switch>
        {/* General Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/grc" component={GRC} />
        <Route path="/audit" component={Audit} />
        <Route path="/lapsec" component={Lapsec} />
        <Route path="/services" component={Services} />
        <Route path="/truck" component={Truck} />
        <Route path="/cyber" component={Cyber} />
        <Route path="/robotics" component={Robotics} />
        <Route path="/about" component={AboutVardaan} />
        <Route path="/contact" component={GetInTouch} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/cookie-policy" component={Cookie} />
        <Route path="/terms-of-service" component={Terms} />
        <Route path="/data-retention-policy" component={Data} />
        <Route path="/international-data-transfers" component={International} />

        {/* What We Do Section */}
        {/* <Route path="/ai-products" component={Products} /> */}
        <Route path="/ai-consulting" component={AIConsultingService} />
        <Route path="/data-services" component={DataServices} />
        <Route path="/data-strategy" component={DataStrategy} />
        <Route path="/erp-services" component={ERPServices} />
        <Route path="/microsoft-services" component={MicrosoftServices} />
        <Route path="/techno-financial" component={TechnoFinancialServices} />
        <Route path="/training-services" component={Training} />
        <Route path="/cybersecurity-services" component={CybersecurityServices} />
        <Route path="/custom-engineering" component={CustomEngineeringServices} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
