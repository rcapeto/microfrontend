import { Button } from "~/components/Button";

type AppProps = {
  camelCase: string;
};

export function App(props: AppProps) {
  return <Button text={props.camelCase} />;
}
