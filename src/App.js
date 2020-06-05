import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './components/Navbar'
import Jobs from "./components/Jobs"
import Candidates from "./components/Candidates"
import Settings from "./components/Settings"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar Link={Link}></Navbar>
        <main>
          <Route path="/jobs" component={Jobs} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/settings" component={Settings} />
        </main>
      </Router>
    </div>
  );
}

export default App;
