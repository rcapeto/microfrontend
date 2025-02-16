import { Link } from "react-router";
import { Layout } from "~/components/Layout";
import { ButtonMfe } from "~/components/mfe/Button";
import { routesConfig } from "~/config/routes";

const mainApplication = routesConfig.applications.main;

export function Home() {
  return (
    <Layout
      title="Página inicial"
      description="Essa é uma página inicial que está dentro do Shell"
    >
      <div className="mt-2 flex items-center justify-center">
        <Link
          to={`${mainApplication.pathname}/${mainApplication.routes.aboutUs}`}
        >
          <ButtonMfe text="Ir para outra aplicação" />
        </Link>
      </div>
    </Layout>
  );
}
