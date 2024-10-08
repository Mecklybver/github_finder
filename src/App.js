import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
import { GithuProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithuProvider>
      <AlertProvider>
      <Router className="bg-purple-500">
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
            <main className="container mx-auto px-3 pb-12 ">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </Router>
      </AlertProvider>
    </GithuProvider>
  );
}

export default App;
