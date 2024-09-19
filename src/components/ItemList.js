import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ itemList }) => {
    const dispatch = useDispatch();
    const handleItem = (item) => {
        //  dispatch an action when user click add button 
        dispatch(addItems(item));
    }

    console.log("itemlist", itemList);
    // const {age} = useContext(UserContext) 
    return (
        <div>
            {itemList.map((item) => (
                <div key={item.card.info.id}
                    className="border-b-2 border-gray-100 m-2 p-2 text-left flex">
                    <div className="w-10/12 p-4">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {Math.round(item.card.info.price / 100)}</span>
                        <p className="text-xs py-4 ">
                            {item.card.info.description}
                        </p>
                        {/* <span>{age }</span> */}

                    </div>
                    <div className="w-2/12 ">
                        <button className="bg-white text-green-400 font-bold shadow-lg rounded-lg p-1 mx-16 absolute"
                            onClick={()=>handleItem(item)}>Add +</button>
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>))}
        </div>
    )
}

export default ItemList;