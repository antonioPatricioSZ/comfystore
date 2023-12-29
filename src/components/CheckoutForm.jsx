/* eslint-disable no-constant-condition */
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch, formatPrice } from "../utils";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("pedido realizado com sucesso");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "ocorreu um erro ao fazer seu pedido";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error.response.status === 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-medium capitalize">informação de envio</h4>
      <FormInput label="primeiro nome" name="name" type="text" />
      <FormInput label="endereço" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="fazer pedido" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
