import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { useParams } from "react-router-dom"; // this use param extract the res id from the 
import ShimmerComponent from "./Shimmer";
import ResCategory from './ResCategory';



const RestaurantMenuComponent = () => {

  const [showIndex, setshowImdex] = useState(null)
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <ShimmerComponent />

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2].card.card.info;
  const { itemCards } = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

 
  const categories = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
    c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(categories);
  
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-bold text-lg my-2">{cuisines.join(",")} - {costForTwoMessage}</p>

      {categories.map((item,index) => (<ResCategory data={item.card.card}
        showItems={index === showIndex ? true : false}
        setshowImdex={() => setshowImdex(index)}
        
      />))}
    </div>
  )
}
export default RestaurantMenuComponent 