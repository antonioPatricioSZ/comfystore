/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-constant-condition */
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";
import { customFetch } from "../utils";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("Você deve estar logado para visualizar pedidos");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "ocorreu um erro ao fazer seu pedido";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="por favor faça um pedido" />;
  }

  return (
    <>
      <SectionTitle text="Seus pedidos" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
