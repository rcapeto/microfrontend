import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/web-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <mfe-button-test theme="teste" camelCase="camelCase" />
  </StrictMode>
);
