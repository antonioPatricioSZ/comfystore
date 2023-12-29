/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from "../components";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("login efetuado com sucesso");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "por favor verifique suas credenciais";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@gmail.com"
        />

        <FormInput
          type="password"
          label="senha"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="entrar" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          usuário convidado
        </button>
        <p className="text-center">
          Ainda não é membro?{" "}
          <Link
            to="/register"
            className="link link-hover link-primary capitalize"
          >
            registre-se
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
