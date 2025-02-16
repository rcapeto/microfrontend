export type ButtonIcon = "arrow_right" | "arrow_left";

export type ButtonProps = {
  text: string;
  icon?: ButtonIcon;
  className?: string;
  onPressKey?: string;

  //apenas para testar as propriedades
  arrayString?: string[];
  arrayObj?: Array<{ text: string }>;
  bool?: boolean;
  number?: number;
  obj?: Record<string, string>;
};
