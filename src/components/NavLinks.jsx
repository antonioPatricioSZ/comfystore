import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ baixo }) => {
  const user = useSelector((state) => state.userState.user);

  const links = [
    { id: 1, url: "/", text: "inicio" },
    { id: 2, url: "about", text: "sobre" },
    { id: 3, url: "products", text: "produtos" },
    { id: 4, url: "cart", text: "carrinho" },
    { id: 5, url: "checkout", text: "checkout" },
    { id: 6, url: "orders", text: "pedidos" },
  ];

  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink to={url} className={`capitalize ${baixo} ? mb-2 : ml-2`}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
