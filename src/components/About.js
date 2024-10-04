import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {

  
  return (
    <div>
      <h1>About </h1>
      <div>
        Logged In User
        <UserContext.Consumer>
          {(data)=> <h1>{data.loggedInUser}</h1>}

        </UserContext.Consumer>
      </div>
      <h2>
        <UserClass
          name={"Amartya(Class Based)"}
          location={"Shimla"}
          contact={"amartya_._"}
        />
      </h2>
    </div>
  );
};
export default About;
