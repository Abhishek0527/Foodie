import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Grocery = () => {
    const {setUserName} = useContext(UserContext)
    return (
        <div>
            <h1>This is a very big app and i want to bundle this component seperately </h1>
            <h2>Through Lazy Loading</h2>
            <p>for lazy load we need to import this component in our app file and when we click on this component it will load</p>
            <p>for lazy load it needs a lazy function which comes from react which uses a callback function and takes import function in that it takes path of this component</p>
            <div>
                <label>Username :</label>
                <input className="border border-black" onChange={(e)=> setUserName(e.target.value)}/>
            </div>
        </div>

    )
};

export default Grocery;