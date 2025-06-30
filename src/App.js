import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import GRC from "./pages/GRC/GRC";
import Audit from "./pages/audit/Audit";
import Lapsec from "./pages/lapsec/Lapsec";
import Services from "./pages/services/Services";
import Truck from "./pages/truck/Truck";
import Cyber from "./pages/cyber/Cyber";
import Robotics from "./pages/robotics/Robotics";
// import Products from "./pages/What We do/AI products/AI products";
import AIConsultingService from "./pages/What We do/AI Consulting Service/AI Consulting Service";
import DataServices from "./pages/What We do/Data Services/DataServices";
import DataStrategy from "./pages/What We do/Data Strategy/Data Strategy";
import ERPServices from "./pages/What We do/ERP Services/ERP Services";
import TechnoFinancialServices from "./pages/What We do/Techno Financial Servies/Techno Financial Services";
import Training from "./pages/What We do/Training/Training";
import MicrosoftServices from "./pages/What We do/Microsoft Services/Microsoft Services";
import CybersecurityServices from "./pages/What We do/Cybersecurity Services/Cybersecurity Services";
import CustomEngineeringServices from "./pages/What We do/Custom Engineering Services/Custom Engineering Services";
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
