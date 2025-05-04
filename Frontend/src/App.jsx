import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import TransitionHistory from "./pages/TransitionHistory";
import FrontPage from "./pages/FrontPage";
import FooterA from "./components/FooterA";
import PageLoader from "./components/PageLoader";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import React, { useState } from "react";



function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/* Show loader when isLoading is true */}
        {isLoading && <PageLoader />}

        <Routes>
          <Route exact path="/" element={<FrontPage setIsLoading={setIsLoading} />} />
          <Route exact path="/DashBoard" element={<DashBoard setIsLoading={setIsLoading} />} />
          <Route exact path="/TransitionHistory" element={<TransitionHistory setIsLoading={setIsLoading} />} />
          <Route exact path="/Login" element={<Login setIsLoading={setIsLoading} />} />
          <Route exact path="/SignUp" element={<SignUp setIsLoading={setIsLoading} />} />

        </Routes>
      </main>

      {/* Footer Section */}
      {location.pathname === '/' && <FooterA />}
      {location.pathname === '/DashBoard' && <BottomNav />}
      {location.pathname === '/TransitionHistory' && <BottomNav />}
      {location.pathname === '/Login' && <BottomNav />}
      {location.pathname === '/SignUp' && <BottomNav />}


    </>
  )
}

const App = () => {
  return (

    <Router>
      <AppContent />
    </Router>
  );
};

export default App
