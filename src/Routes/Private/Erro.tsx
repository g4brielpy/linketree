import { Link } from "react-router-dom";

export function Erro() {
  return (
    <main className="h-dvh flex justify-center items-center flex-col gap-8">
      <h1 className="text-white text-4xl font-bold">
        Erro ao carregar a página!
      </h1>
      <Link
        to={"/login"}
        className="text-xl text-blue-600 font-semibold underline"
      >
        Voltar para a página de Login
      </Link>
    </main>
  );
}
