import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import About from "./pages/AboutPage";
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
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home-2" exact element={<HomePage2 />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/service-details" exact element={<ServiceSingle />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/team-single" exact element={<TeamSingle />} />
        <Route path="/case-studies" exact element={<CaseStudies />} />
        <Route path="/case-study" exact element={<CaseStudySingle />} />
        <Route path="/blog-single" exact element={<BlogSingle />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/changelog" exact element={<Changelog />} />
        <Route path="/licenses" exact element={<Licenses />} />
        <Route path="/password-protection" exact element={<PasswordProtection />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
