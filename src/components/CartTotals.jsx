import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, tax, shipping, orderTotal} = useSelector((state) => state.cartState);

  return (
    <div className="card bg-base-200">
      <div className="card-body" >
        <p className="flex justify-between border-b border-base-300 text-xs pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 text-xs pb-2">
          <span>Envio</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 text-xs pb-2">
          <span>Taxa</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        <p className="flex justify-between text-sm mt-4 pb-2">
          <span>Total do Pedido</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
