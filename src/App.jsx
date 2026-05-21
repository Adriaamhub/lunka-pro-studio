import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import GalleryPage from "./pages/GalleryPage";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/pricing"
          element={<Pricing />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;