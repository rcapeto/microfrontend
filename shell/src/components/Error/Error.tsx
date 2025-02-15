import { Link } from "react-router";
import { Button } from "~/components/Button";

export function Error() {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Desculpe, nós não conseguimos encontra a página que você está
          procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <Button>Voltar para home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
