import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.4823413140998&lng=86.69925414025782&restaurantId=" + resId);
        const json = await data.json();
        console.log(json);

        setresInfo(json.data)
    };


    return resInfo;
}

export default useRestaurantMenu;