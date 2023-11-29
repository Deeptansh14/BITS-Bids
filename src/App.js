import  React from "react";
import Homepage from './pages/homepage/homepage';
import './App.css';
import MarketPage from "./pages/market/market.js";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import YourBids from "./pages/yourbids/yourbids";
import Chat from "./pages/chat/chat";
import { slides } from "./pages/market/mydata";
import ItemDetail from "./pages/itemdetails/itemdetails";
import PROFILE from "../src/pages/profile/profile";
import EnlistmentPage from "./pages/Enlistpage/Enlist";


const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<Homepage />} />
<Route path="/market" element={<MarketPage />} />
<Route path="/yourbids" element={<YourBids />} />
<Route path="/chat" element={<Chat />} />
<Route path="/profile" element={<PROFILE />} />
<Route path="/enlist" element={<EnlistmentPage />} />

{slides.map((item) => (
          <Route
           
            path={"/market/${item.title}}"}
            element={<ItemDetail />}
          />
        ))}
    </Routes>

    
  </Router>
  );
}

export default App;