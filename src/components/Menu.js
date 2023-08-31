// import React from "react";

// const Menu = () => {
//   return (
//     <div>
//       <ul className="flex space-x-5">
//         <li><a href="">Shop</a></li>
//         <li><a href="">Features</a></li>
//         <li><a href="">Recipes</a></li>
//         <li><a href="">Hotline</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Menu;

import React, { useState } from 'react'
import '../css/Menu.css'

const Menu = () => {
  const [state, setState] = useState(false)
  return (
    <nav className={state ? 'menu active' : 'menu'}>
      <div className="hamburger-icon" onClick={() => setState(!state)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul >
        <li><a href="">Shop</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Recipes</a></li>
        <li><a href="">Hotline</a></li>
      </ul>


    </nav>

  )
}

export default Menu