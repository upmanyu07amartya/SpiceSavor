import { useRouteError } from "react-router-dom";

const Error = () => {
  //useRouterError is a hook given to us by react-router-dom
  // it gives more info about the error
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  );
};

export default Error;
