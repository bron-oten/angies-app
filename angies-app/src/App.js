import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Transactions from './components/Transactions.jsx';
import Cashflow from './components/Cashflow.jsx';
import NetWorth from './components/NetWorth.jsx';
import Settings from './components/Settings.jsx';
import Support from './components/Support.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/cashflow">Cashflow</Link></li>
            <li><Link to="/net-worth">Net Worth</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cashflow" element={<Cashflow />} />
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
