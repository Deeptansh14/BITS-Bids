// itemdetails.js
import React from 'react';
import { slides } from "../market/mydata";
import "./itemdetails.css";
import { getProductDetailsById } from "../../pages/market/itemscard";

const ItemDetail = () => {
  const url = window.location.pathname;
  const productIdToRetrieve = url.substring(url.lastIndexOf('/') + 1);
  const productDetails = getProductDetailsById(productIdToRetrieve);
  return (
    <><div>
      
    
    <div className='about-itemcontainer' >
      <div className='abouttitle'>{productDetails.title}</div>
      <img className="item-image" src={productDetails.image} alt="item image" />
      <div className='aboutcurrentbid'>Current bid: {productDetails.currentbid}</div>
      <div className='aboutdescription'>Description: {productDetails.description}</div>
     
    </div>
      
    </div>
    </>
  );
}

export default ItemDetail;
