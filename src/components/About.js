import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from '../utils/UserContext';

const About = () => {
  const { loginUser } = useContext(UserContext);
    return (
        <div>
            <h1 className="font-bold">{loginUser}</h1>
            <h3>First React Project 🚀🚀🚀</h3>
            <div>
                <User />
                <UserClass/>
            </div>
        </div>
        
    )
};

export default About;