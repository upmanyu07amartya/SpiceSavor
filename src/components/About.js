import User from "./User";
import UserClass from "./UserClass";

const About = () => {

  
  return (
    <div>
      <h1>About </h1>
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
