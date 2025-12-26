import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Question from "./Pages/Question";
import MyPhotographyStyle from "./Pages/MyPhotographyStyle";
import Contact from "./Pages/Contact";
import PhotoGallery from "./Pages/PhotoGallery";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";

import Baby from "./Pages/services/Baby";
import Event from "./Pages/services/Event";
import Family from "./Pages/services/Family";
import Maternity from "./Pages/services/Maternity";
import Wedding from  "./Pages/services/Wedding";

function App() {
  return (
    <Router>
      <Header />
      <SocialBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/question" element={<Question />} />
        <Route path="/about/MyPhotographyStyle" element={<MyPhotographyStyle/>}/>
        <Route path="/services" element={<Services />} />

        {/* SERVICES PAGES */}
        <Route path="/services/baby" element={<Baby />} />
        <Route path="/services/event" element={<Event />} />
        <Route path="/services/family" element={<Family />} />
        <Route path="/services/Maternity" element={<Maternity/>}/>
        <Route path="/services/wedding" element={<Wedding/>}/>

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
