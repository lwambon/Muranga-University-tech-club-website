import "./App.css";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import Tracks from "./pages/Tracks/Tracks";
import Events from "./pages/Events/Events";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
