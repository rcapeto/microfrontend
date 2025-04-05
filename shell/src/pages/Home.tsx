import { Link } from "react-router";
import { Layout } from "~/components/Layout";
import { AngularMfe } from "~/components/mfe/Angular";
import { ButtonMfe } from "~/components/mfe/Button";
import { routesConfig } from "~/config/routes";

const mainApplication = routesConfig.applications.main;
const onPressKey = "buttonKeyFunction";

export function Home() {
  function onPressButton() {
    alert("click");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)[onPressKey] = onPressButton;

  return (
    <Layout
      title="Página inicial"
      description="Essa é uma página inicial que está dentro do Shell"
    >
      <div className="mt-2 flex items-center justify-center gap-2">
        <Link
          to={`${mainApplication.pathname}/${mainApplication.routes.aboutUs}`}
        >
          <ButtonMfe text="Ir para outra aplicação" />
        </Link>

        <ButtonMfe text="Testar o click" onPressKey={onPressKey} />
      </div>

      <div className="mt-2">
        <AngularMfe title="Título pelo shell" />
      </div>
    </Layout>
  );
}
