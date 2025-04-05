import { createRoot, Root } from "react-dom/client";
import { CreateWebComponentConfig } from "./types";

export function createWebComponent<ComponentProps extends object = object>(
  config: CreateWebComponentConfig<ComponentProps>
) {
  const {
    Component,
    tag,
    css = "",
    withShadowDOM = true,
    componentProps = [],
  } = config;

  class WebComponent extends HTMLElement {
    private css: string = css;
    private shadow?: ShadowRoot = withShadowDOM
      ? this.attachShadow({ mode: "open" })
      : undefined;
    private root?: Root;

    getProps(): ComponentProps {
      console.log("attributes", this.attributes);

      return componentProps.reduce(
        (acc, prop) => ({
          ...acc,
          [prop]: this.getAttribute((prop as string).toLowerCase()),
        }),
        {}
      ) as ComponentProps;
    }

    attachShadowStyles(shadowRoot: ShadowRoot) {
      if (this.css) {
        const style = document.createElement("style");
        style.innerText = this.css;
        shadowRoot.appendChild(style);
      }
    }

    connectedCallback() {
      if (this.shadow) {
        this.attachShadowStyles(this.shadow);
      }

      this.render();
    }

    render() {
      const container = this.shadow ?? this;
      const props = this.getProps();

      this.root = createRoot(container);
      this.root.render(<Component {...props} />);
    }

    destroy() {
      this.root?.unmount();
    }

    disconnectedCallback() {
      this.destroy();
    }
  }

  customElements.define(tag, WebComponent);
}
