import { loadWebComponent } from "~/utils";

type ButtonProps = {
  text: string;
  icon?: "arrow_left" | "arrow_right";
  className?: string;
  onPressKey?: string;
  // testar as propriedades
  arrayString?: string[];
  arrayObj?: Array<{ text: string }>;
  bool?: boolean;
  number?: number;
  obj?: Record<string, string>;
};

const tagName = "mfe-button";
const path = `${tagName}.js`;
const src = `http://localhost:5002/assets/${path}`;

export const ButtonMfe = loadWebComponent<ButtonProps>({
  src,
  tagName,
  type: "module",
});
