import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css'
import TopBanner from "./components/TopBanner"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import LandingPage from './components/Landing'
import AvocadoPage from "./pages/AvocadoPage"
import AvocadoOilPage from "./pages/AvocadoOilPage"
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <TopBanner />
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/avocadoes" element={<AvocadoPage />} />
          <Route path="/avocado-oil" element={<AvocadoOilPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
