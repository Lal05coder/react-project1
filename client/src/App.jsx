import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
=======
      <Hero />
      <Stats />
      <Services />
      <Platforms />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
    </>
>>>>>>> 4b5d995a362b30718ca90d947cbb584b1e3c1704
  );
}

export default App;
