import { Link } from "react-router";
import { Layout } from "~/components/Layout";
import { ButtonMfe } from "~/components/mfe/Button";

export function Home() {
  return (
    <Layout
      title="Página inicial"
      description="Essa é uma página inicial que está dentro do Shell"
    >
      <div className="mt-2 flex items-center justify-center">
        <Link to="mfe/documentacao">
          <ButtonMfe text="Ir para outra aplicação" />
        </Link>
      </div>
    </Layout>
  );
}
