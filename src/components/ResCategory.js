import { useState } from "react";
import ItemList from "./ItemList"
const ResCategory = ({ data,showItems,setshowImdex }) => {
    
    const handleClick = () => {
        setshowImdex();

    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50  shadow-xl p-4 mx-auto my-6  ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList itemList={data.itemCards} />}
            </div>

        </div>
    )
};
export default ResCategory;