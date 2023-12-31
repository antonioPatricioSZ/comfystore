import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h1 className="font-bold text-4xl">Houve um erro...</h1>;
};

export default ErrorElement;
