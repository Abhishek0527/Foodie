import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

  console.log("Header");
  const onlineStatus = useOnlineStatus();

  const { loginUser } = useContext(UserContext);

  // subscribing to a store through selector
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);


  const [btn, setBtn] = useState("login");
  useEffect(() => {
    console.log("useEffect Render");
  }, [btn]);
  return (
    <div className="flex justify-between bg-slate-200 shadow-md">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart"> 🛒({cart.length}items)</Link>
          </li>

          <button
            onClick={() =>
              btn === "login" ? setBtn("logout") : setBtn("login")
            }
          >
            {btn}
          </button>
          <li className="px-4 font-bold">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
