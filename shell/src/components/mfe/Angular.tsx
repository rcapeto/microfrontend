import { Loading } from "~/components/Loading";
import { loadWebComponent } from "~/utils";

type AngularComponentProps = {
  title: string;
  ref?: unknown;
};

const tagName = "mfe-angular";
const src = `http://localhost:8181/browser/main.js?v=${Date.now()}`;

export const AngularMfe = loadWebComponent<AngularComponentProps>({
  src,
  tagName,
  type: "module",
  loaderElement: Loading,
  onError(errorMessage) {
    console.log("@@@ error", errorMessage);
  },
});
