/* import React from "react";

const ItemPizza = ({ data, handleItemClick }) => {
return (
 <div onClick={() => handleItemClick(data)}>
    <div>
      <img className="w-14 h-14" src={data.image} />
     <p>{data.prix} $</p>
    </div>
   <p>{data.nom}</p>
  </div>
);
};

export default ItemPizza; */

import React from 'react'

const ItemPizza = ({ data, handleItemClick }) => {
  return (
    <div className='flex space-x-9' onClick={() => handleItemClick(data)}>
      <div>
        <img className='w-40 h-40' src={data.image} />
      </div>
      <div>
        <h3>{data.nom}</h3>
        <p>{data.prix}$</p>
      </div>


    </div>
  )
}

export default ItemPizza