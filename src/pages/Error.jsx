import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary"> 404</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            página não encontrada
          </h2>
          <p className="mt-6 text-lg leading-7">
            Lamentamos, mas não conseguimos encontrar a página que você procura.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary text-lg uppercase">
              voltar ao inicio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
