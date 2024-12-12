import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css'
import LandingPage from './components/Landing'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
