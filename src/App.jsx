import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow px-4 md:px-8 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:name" element={<ItemDetail />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;