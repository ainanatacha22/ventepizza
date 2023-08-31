// import "./App.css";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import ListePizza from "./components/ListePizza";
// import Image1 from "./assets/pizza1.jpg";
// import Image2 from "./assets/pizza2.webp";
// import { useEffect, useState } from "react";
// import Panier from "./components/Panier";

// function App() {
//   const donnes = [
//     { image: Image1, prix: 20, nom: "Pizza1" },
//     { image: Image2, prix: 22, nom: "Pizza2" },
//     { image: Image1, prix: 24, nom: "Pizza3" },
//   ];
//   const [pizzaAffiche, setPizzaAffiche] = useState(donnes[0]);
//   const [afficherPanier, setAfficherPanier] = useState(false);
//   const [textButtonPanier, setTextButtonPanier] = useState("Afficher pannier");
//   const [listePannier, setListePannier] = useState([]);

//   useEffect(() => {
//     if (afficherPanier) {
//       setTextButtonPanier("Cacher pannier");
//     } else {
//       setTextButtonPanier("Afficher panier");
//     }
//   }, [afficherPanier]);

//   function handleOrderNowClick() {
//     setListePannier([...listePannier, pizzaAffiche]);
//   }

//   function handleAfficherPanierClick() {
//     setAfficherPanier(!afficherPanier);
//   }

//   function handleItemClick(item) {
//     console.log("eeeeeeeeeeeeeeeeee", item);
//     setPizzaAffiche(item);
//   }

//   return (
//     <div className="App">
//       {afficherPanier && <Panier listePannier={listePannier} />}
//       <Header
//         handleAfficherPanierClick={handleAfficherPanierClick}
//         textButtonPanier={textButtonPanier}
//       />
//       <Body data={pizzaAffiche} handleOrderNowClick={handleOrderNowClick} />
//       <ListePizza datas={donnes} handleItemClick={handleItemClick} />
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Header from '../src/pages/Header'
import Body from '../src/pages/Body'
import ListePizza from './components/ListePizza'
import Image1 from './assets/pizza1.jpg'
import Image2 from './assets/pizza2.jpg'
import Image3 from './assets/pizza3.jpg'
import Image4 from './assets/pizza4.jpg'
import { useState } from 'react'
import Panier from './components/Panier'

const App = () => {
  const donnes = [
    { image: Image1, nom: 'pizza1', prix: 6 },
    { image: Image2, nom: 'pizza2', prix: 7 },
    { image: Image3, nom: 'pizza3', prix: 8 },
    { image: Image4, nom: 'pizza4', prix: 9 }
  ]
  const [pizzaAffiche, setPizzaAffiche] = useState(donnes[0])
  const [listePannier, setListePannier] = useState([])
  const [afficherPanier, setAfficherPanier] = useState(false);

  function handleItemClick(item) {
    setPizzaAffiche(item)
  }
  function handleOrderNowClick() {
    var nouvelListePanier = [...listePannier]
    var index = listePannier.findIndex(item => pizzaAffiche.nom == item.nom
    )
    if (index != -1) {
      nouvelListePanier[index].prix += pizzaAffiche.prix
    }
    else {
      nouvelListePanier.push({ ...pizzaAffiche })
    }


    setListePannier([...nouvelListePanier])
  }
  function handleAfficherPanierClick() {
    setAfficherPanier(!afficherPanier);
    // console.log("AAAAAAAAAAAAAAAA", afficherPanier)
  }

  return (
    <div>
      {afficherPanier && <Panier listePannier={listePannier} setListePannier={setListePannier} />}
      <Header listePannier={listePannier} handleAfficherPanierClick={handleAfficherPanierClick} />
      <Body data={pizzaAffiche} handleOrderNowClick={handleOrderNowClick} />
      <ListePizza datas={donnes} handleItemClick={handleItemClick} />
    </div>
  )
}

export default App
