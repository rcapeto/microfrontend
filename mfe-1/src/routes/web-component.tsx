import { createRoot } from "react-dom/client";
import css from "~/components/styles.css?inline";
import { defineWebComponent, PropSchema, WebComponentBase } from "~/utils";
import { Router } from "./Router";
import { RouterProps } from "./types";

class Component extends WebComponentBase<RouterProps> {
  shadow = this.attachShadow({ mode: "open" });

  css = css;
  attributesSchema?: PropSchema<RouterProps>[] = [
    {
      name: "baseUrl",
      type: "string",
      required: true,
      defaultValue: "",
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Router {...props} />);
  }
}

defineWebComponent("mfe-router", Component);
