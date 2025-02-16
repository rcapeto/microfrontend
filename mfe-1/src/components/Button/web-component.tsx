import { createRoot } from "react-dom/client";
import { defineWebComponent, WebComponentBase } from "~/utils";
import { PropSchema } from "~/utils/secondary";
import { Button } from "./Button";
import { ButtonProps } from "./types";

class Component extends WebComponentBase<ButtonProps> {
  shadow = this.attachShadow({ mode: "open" });

  styles = ["style[mfe-button-style]"];

  attributesSchema?: PropSchema<ButtonProps>[] = [
    {
      name: "text",
      type: "string",
      required: true,
      defaultValue: "Empty Text Value",
    },
    {
      name: "icon",
      type: "string",
      required: false,
    },
    {
      name: "className",
      type: "string",
      required: false,
      defaultValue: "",
    },
    //testar o schema
    {
      name: "arrayString",
      type: "array",
      defaultValue: [],
      required: false,
    },
    {
      name: "arrayObj",
      type: "array",
      defaultValue: [],
      required: false,
    },
    {
      name: "bool",
      type: "boolean",
      required: false,
    },
    {
      name: "number",
      type: "number",
      required: false,
    },
    {
      name: "obj",
      type: "object",
      required: false,
    },
    {
      name: "onPressKey",
      type: "string",
      required: false,
      defaultValue: "",
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Button {...props} />);
  }
}

defineWebComponent("mfe-button", Component);
