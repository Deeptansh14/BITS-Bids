import  React from "react";
import Homepage from './pages/homepage/homepage';
import './App.css';
import MarketPage from "./pages/market/market";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import YourBids from "./pages/yourbids/yourbids";
import Chat from "./pages/chat/chat";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<Homepage />} />
<Route path="/market" element={<MarketPage />} />
<Route path="/yourbids" element={<YourBids />} />
<Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
  );
}

export default App;