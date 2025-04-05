import { App } from "~/App";
import { createWebComponent } from "~/utils";
import indexCss from "./index.css?inline";

createWebComponent<{ theme: string; camelCase: string }>({
  Component: App,
  tag: "mfe-button-test",
  componentProps: ["theme", "camelCase"],
  css: indexCss,
});
