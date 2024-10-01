

const User = ({ name,location,contact }) => {
  return (
    <div className="user-card">
      <h2>NAME: {name}</h2>
      <h3>Location : {location}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  );
};

export default User;
