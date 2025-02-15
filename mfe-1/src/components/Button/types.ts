export type ButtonIcon = "arrow_right" | "arrow_left";

export type ButtonProps = {
  text: string;
  icon?: ButtonIcon;
  className?: string;
  //apenas para testar
  arrayString?: string[];
  arrayObj?: Array<{ text: string }>;
  bool?: boolean;
  number?: number;
  obj?: Record<string, string>;
};
