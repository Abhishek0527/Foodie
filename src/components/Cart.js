import { useSelector ,useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
    const dispatch = useDispatch();

    const handleclear = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl ">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-red-400 text-white m-2 p-2 rounded-md" onClick={handleclear}>Clear cart</button>
            <ItemList itemList={cartItems} />
            </div>
           
        </div>
    )
}
export default Cart;