import * as React from "react";
import { ButtonIcon } from "~/components/Button";

type WebComponent<Props = object> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & Props,
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mfe-button": WebComponent<{
        text: string;
        className?: string;
        icon?: ButtonIcon;
      }>;
      "mfe-router": WebComponent<{
        baseUrl?: string;
      }>;
      "mfe-button-test": WebComponent<{
        theme?: string;
        camelCase?: string;
        camelcase?: string;
      }>;
    }
  }
}
