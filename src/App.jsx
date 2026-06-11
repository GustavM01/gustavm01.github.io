import {
  BrowserRouter,
  HashRouter,
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
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <NavBar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
