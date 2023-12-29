import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import ptBr from "dayjs/locale/pt-br";
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total de pedidos: {meta.pagination.total}</h4>
      <div className="overflowx-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Produtos</th>
              <th>Custo</th>
              <th className="hidden sm:block">Data</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = day(createdAt, { locale: ptBr }).format(
                "D MMM, YYYY - HH:mm"
              );
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
