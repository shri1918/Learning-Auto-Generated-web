import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import About from './componant/About';
import Contact from './componant/Contact';
import Project from './componant/Project';
import Basic from './componant/Basic';
import Front from './componant/Front';
import Back from './componant/Back';
import DSA from './componant/DSA';
import AdvF from './componant/AdvF';
import AdvB from './componant/AdvB';
import CrForm from './componant/CrForm';
import UserData from './componant/UserData';
import Notes from './componant/Notes';
import Signup from './componant/Signup';
import SignupAdmin from './componant/SignupAdmin';
import SignupUser from './componant/SignupUser';
import Welcome from './componant/Welcome';
import NotesBox from './componant/NotesBox';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={isLoggedIn ?<Welcome />: <Navigate to="/crform" />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupadmin" element={<SignupAdmin />} />
        <Route exact path="/signupuser" element={<SignupUser />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/basic" element={<Basic />} />
        <Route exact path="/front" element={<Front />} />
        <Route exact path="/back" element={<Back />} />
        <Route exact path="/dsa" element={<DSA />} />
        <Route exact path="/advf" element={<AdvF />} />
        <Route exact path="/advb" element={<AdvB />} />
        <Route exact path="/notesbox" element={<NotesBox />} />
        <Route
          exact
          path="/project"
          element={<Project />}
        />
        <Route
          exact
          path="/crform"
          element={<Navigate to="/home" />}
        />
        <Route
          exact
          path="/userdata"
          element={<UserData /> }
        />
        <Route exact path="/notes" element={ <Notes /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
