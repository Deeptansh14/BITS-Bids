// itemdetails.js
import React from 'react';
import { slides } from "../market/mydata";
import "./itemdetails.css"
const ItemDetail = () => {
  return (
    <><div>
      {slides.map((item) => (
    
    <div className='about-itemcontainer' >
      <div className='abouttitle'>{item.title}</div>
      <img className="item-image" src={item.image} alt="item image" />
      <div className='aboutcurrentbid'>Current bid: {item.currentbid}</div>
      <div className='aboutdescription'>Description: {item.description}</div>
     
    </div>
      ))}
    </div>
    </>
  );
}

export default ItemDetail;
