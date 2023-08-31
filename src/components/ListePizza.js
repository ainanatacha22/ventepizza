// import React from "react";
// import ItemPizza from "./ItemPizza";

// const ListePizza = ({ datas, handleItemClick }) => {
//   return (
//     <div className="flex justify-around mt-6">
//       {datas.map((donne, key) =>

//         <ItemPizza data={donne} key={key} handleItemClick={handleItemClick} />
//       )}
//     </div>
//   );
// };

// export default ListePizza;
import React from 'react'
import ItemPizza from './ItemPizza'

const ListePizza = ({ datas, handleItemClick }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {datas.map((item, index) => (
                <div
                    key={index}
                    style={{
                        flex: '1 0 calc(25% - 10px)', // 4 items per row
                        margin: '5px',
                        minWidth: 250,
                        backgroundColor: 'lightgray',
                        padding: '20px',
                        borderRadius: '12px',

                    }}
                >
                    <ItemPizza data={item} handleItemClick={handleItemClick} />
                </div>
            ))}
        </div>

    )
}

export default ListePizza
