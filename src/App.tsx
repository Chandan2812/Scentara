import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import { Toaster } from "sonner";

export default function App() {
  return (
    <Router>
      {/* Global Toaster (for notifications) */}
      <Toaster position="top-center" richColors closeButton />

      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
