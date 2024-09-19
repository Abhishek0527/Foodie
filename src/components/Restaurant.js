import { CDN_URL } from "../utils/constant";

const RestaurantContainer = ({ resState }) => {
  return (
    <div className="m-4 p-4 w-[300px]  bg-slate-100 hover:bg-slate-200  rounded-lg" >
      <img alt="res-logo" className="rounded-lg" src={CDN_URL + resState.info.cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{resState?.info?.name}</h3>
      <h4>{resState?.info?.avgRating}</h4>
      <h4>{resState?.info?.costForTwo}</h4>
      <h4 className="align-text-bottom truncate">{resState?.info.cuisines.join(",")}</h4>
    </div>
  );
};

export const Openlabel = (RestaurantContainer) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 absolute bg-black text-white rounded-lg">Open</label>
        <RestaurantContainer {...props} />
      </div>
    )
  }
}

export default RestaurantContainer;
