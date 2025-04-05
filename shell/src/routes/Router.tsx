import { BrowserRouter, Route, Routes } from "react-router";
import { Error } from "~/components/Error";
import { RouterMfe } from "~/components/mfe/Router";
import { routesConfig } from "~/config/routes";
import { Components } from "~/pages/Components";
import { Home } from "~/pages/Home";

const mainMfePathname = routesConfig.applications.main.pathname;

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="componentes" element={<Components />} />
        <Route
          path={`${mainMfePathname}/*`}
          element={<RouterMfe baseurl={mainMfePathname} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
