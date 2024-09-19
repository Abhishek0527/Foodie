import RestaurantContainer, {Openlabel} from "./Restaurant";
import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [searchText, setsearchText] = useState("");

  

  console.log("Body render", restaurantList);

  const onlineStatus = useOnlineStatus();
 
  const Openrestaurants = Openlabel(RestaurantContainer);

  useEffect(() => {
    fetchData();
    console.log("effect");

  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5802402&lng=88.4337248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  if (onlineStatus === false) return <h1>Check your internet connection</h1>;

  if (restaurantList.length === 0) {
    return <ShimmerComponent />
  }

  return (
    <div className="body">
      <div className=" flex items-center">
        <div className=" p-4 m-4 ">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />
          <button className="m-4 px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              let filteredRes = restaurantList.filter((res) =>
                res.info.name.includes(searchText));
              setRestaurantList(filteredRes);
            }}>Search</button>

          <button className="m-4 px-4 py-2 bg-blue-200 rounded-lg"
            onClick={() => {
              filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setRestaurantList(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Button
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurat/" + restaurant.info.id}>

            {/* i want to return the same component restaurant but for specific logic for some card
             that's why we need a higher order component which takes a component and returns a component after enhancing it*/ }
            {restaurant.info.isOpen ? (<Openrestaurants resState={restaurant} />) : <RestaurantContainer resState={restaurant} />}
            

          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
