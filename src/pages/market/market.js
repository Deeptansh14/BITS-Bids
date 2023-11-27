import React from "react";
import "./markets.css"; // Import your CSS file for MarketPage
import Navbar from "../../components/navbar/navbar.js";
import Itemscard from "./itemscard.js";

function MarketPage() {
return(
    <>
    <div>
        <Navbar />
    </div>
    <div>
        <Itemscard />
    </div>
    </>
);
}

export default MarketPage;
