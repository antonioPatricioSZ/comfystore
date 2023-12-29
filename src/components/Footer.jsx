import { NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 pb-0">
      <div className="align-element grid gap-y-8 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 p-10 items-center">
        <div>
          <NavLink
            to="/"
            className="lg:flex btn btn-primary text-3xl items-center w-16 h-14 md:w-20 md:h-18"
          >
            C
          </NavLink>
          <span className="lg:hidden text-xl md:text-2xl ml-4">Comfy Store</span>
        </div>
        <p className="font-medium text-lg col-span-1 lg:text-center lg:mr-12">
          Todos os direitos reservados &copy; 2024
        </p>
        <div className="flex gap-x-4  lg:justify-self-end">
          <a
            href="https://github.com/antonioPatricioSZ"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="h-10 w-10 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
          </a>
          <a
            href="https://www.linkedin.com/in/antoniopatr%C3%ADcio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="h-10 w-10 text-slate-500 hover:text-black duration-300"></FaLinkedin>
          </a>
          <a
            href="https://www.instagram.com/patricio_sfilho/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="h-10 w-10 text-slate-500 hover:text-black duration-300"></FaInstagramSquare>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
