import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./components/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
