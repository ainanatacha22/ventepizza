// import React from "react";
// import Image1 from "../assets/pizza1.jpg";

// const Body = ({ data, handleOrderNowClick }) => {
//   return (
//     <div className="flex space-x-6 pt-6">
//       <img className="w-[500px] h-[500px]" src={data.image} />
//       <div>
//         <h1>{data.nom}</h1>
//         <p>lorem lorem lorem</p>
//         <div className="flex space-x-6">
//           <p>{data.prix} $</p>
//           <button onClick={handleOrderNowClick}>Order now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;

import React from 'react'

const Body = ({ data, handleOrderNowClick }) => {
    return (
        <div className='flex flex-col items-center lg:flex-row space-x-16 md:space-x-24 lg:space-x-36'>
            <img src={data.image} className='object-cover  w-full h-[500px] md:w-full md:h-[700px] lg:w-6/12 lg:h-[850px]' />
            <div className='flex items-center font-bold text-4xl'>
                <div>
                    <h1>{data.nom}</h1>
                    <p>{data.prix} $</p>
                </div>

                <div className='text-lg '>
                    <button onClick={handleOrderNowClick} className='border px-5 rounded-md hover:bg-[#F1C93B] bg-[#FBD85D] '>Order Now</button>
                </div>
            </div>

        </div>
    )
}

export default Body