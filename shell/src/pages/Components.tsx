import { useNavigate } from "react-router";
import { Button } from "~/components/Button";
import { Layout } from "~/components/Layout";

export function Components() {
  const navigate = useNavigate();

  function handleClickGoBack() {
    navigate(-1);
  }

  return (
    <Layout
      title="Components"
      description="Página de componentes da aplicação principal"
    >
      <div className="flex items-center justify-center mt-2">
        <Button onClick={handleClickGoBack}>Voltar</Button>
      </div>
    </Layout>
  );
}
