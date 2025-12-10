import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;


