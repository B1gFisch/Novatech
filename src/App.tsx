import React from 'react';
import './style.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/home.page';
import FeedbackPage from './pages/feedback.page';
import SolutionsPage from './pages/solutions.page';
import NavComponent from './components/nav/nav.component';
import Footer from "./components/footer/footer.component";
import ServicesPage from "./pages/services.page";
import AboutPage from "./pages/about.page";
import AdminPage from "./pages/admin.page";
import LoginPage from "./pages/login.page";

function App() {
    return (
        <div className="page-wrapper">
            <NavComponent />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
