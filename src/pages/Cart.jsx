import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemsList, CartTotals, SectionTitle } from "../components";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Seu carrinho está vazio" />;
  }

  return (
    <>
      <SectionTitle text="Carrinho de compras" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              prossiga para o checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              faça o login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
