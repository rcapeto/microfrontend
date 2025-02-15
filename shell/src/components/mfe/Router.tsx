import { Error } from "~/components/Error";
import { Loading } from "~/components/Loading";
import { loadWebComponent } from "~/utils";

type RouterProps = {
  baseUrl?: string;
};

const tagName = "mfe-router";
const path = `${tagName}.js`;
const src = `http://localhost:5002/assets/${path}`;

export const RouterMfe = loadWebComponent<RouterProps>({
  src,
  tagName,
  type: "module",
  loaderElement: Loading,
  errorElement: (message, tag) => {
    console.error("Error render MFE", {
      tag,
      message,
      src,
    });

    return <Error />;
  },
});
