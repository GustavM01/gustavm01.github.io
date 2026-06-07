import {
  BrowserRouter,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
