// import React from "react";

// const Panier = ({ listePannier }) => {
//   console.log("CCCCCCCCCCCCCCCCCCCCCCCC", listePannier)
//   let total = 0;

//   listePannier.forEach((itemPanier) => {
//     total = total + itemPanier.prix;
//   });

//   return (
//     <div className="panier">
//       <ul>
//         {listePannier.map((itemPanier) => (
//           <li>
//             {itemPanier.nom} : {itemPanier.prix} $
//           </li>
//         ))}
//       </ul>
//       <p>Total : {total} $</p>
//     </div>
//   );
// };

// export default Panier;


import React from 'react'
import '../css/Panier.css'

const Panier = ({ listePannier, setListePannier }) => {

    let total = 0;
    listePannier.forEach((element) => {
        total = total + element.prix;
    });
    console.log(listePannier);
    return (
        <div className="panier">
            <ul>
                {listePannier.map((element) => (
                    <li>{element.nom} : {element.prix} $</li>
                ))}
            </ul>
            <p>Total : {total} $</p>
            <button style={{ background: 'yellow', width: "100%", fontSize: '12px', borderRadius: '5px' }} onClick={() => setListePannier([])}>vider</button>

        </div>
    )
}

export default Panier