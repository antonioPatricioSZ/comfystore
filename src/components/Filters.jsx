import { Form, Link, useLoaderData } from "react-router-dom";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="pesquisar produto"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Categories */}
      <FormSelect
        label="selecionar categoria"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Companies */}
      <FormSelect
        label="selecionar empresa"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* Order */}
      <FormSelect
        label="ordenar por"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price */}
      <FormRange
        name="price"
        label="selecionar valor"
        size="range-sm"
        price={price}
      />
      {/* Shipping */}
      <FormCheckbox
        name="shipping"
        label="frete grátis"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        pesquisar
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        limpar
      </Link>
    </Form>
  );
};

export default Filters;
