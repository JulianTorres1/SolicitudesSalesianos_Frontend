import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import componets
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';
import Login from './components/login';
import Dashboard from './components/Dashboard';

const HomePage = () => (
  <>
    <Hero />
    <ContactForm />
  </>
);

const LoginPage = () => (
  <>
    <Login />
  </>
);

const DashboardPage = () => (
  <>
    <Dashboard />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Dashboard" element={<DashboardPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;