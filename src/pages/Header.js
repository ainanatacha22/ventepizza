// import React from "react";
// import Menu from "./Menu";

// const Header = ({ handleAfficherPanierClick, textButtonPanier }) => {
//   return (
//     <div className="flex justify-around items-center mt-4">
//       <h1>foodbar</h1>
//       <Menu />
//       <button onClick={handleAfficherPanierClick}>{textButtonPanier}</button>
//     </div>
//   );
// };

// export default Header;

import React from 'react'
import Menu from '../components/Menu'
import '../css/Header.css'
import Panier from '../assets/panier.png'

const Header = ({ listePannier, handleAfficherPanierClick }) => {
    return (
        <div className='relative header flex justify-between px-4 md:px-8 lg:px-16 items-center' >
            <h1>Foodbar</h1>
            <Menu />
            <div >
                <img src={Panier} onClick={handleAfficherPanierClick} className='w-6 h-6' style={{ cursor: 'pointer' }} />
                <div className='absolute top-1 right-3 w-4 rounded-full text-[12px] text-center bg-red-600'>
                    {listePannier.length}
                </div>
            </div>

        </div >
    )
}

export default Header