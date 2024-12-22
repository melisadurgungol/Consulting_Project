import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import Team from "./pages/Team";
import TeamSingle from "./pages/TeamSingle";
import CaseStudies from "./pages/CaseStudies";
import CaseStudySingle from "./pages/CaseStudySingle";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Changelog from "./pages/Changelog";
import Licenses from "./pages/Licenses";
import PasswordProtection from "./pages/PasswordProtection";
import NotFound404 from "./pages/NotFound404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<HomePage2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-single" element={<TeamSingle />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study" element={<CaseStudySingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/password-protection" element={<PasswordProtection />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
