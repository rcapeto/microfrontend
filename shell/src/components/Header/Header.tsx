import { Link } from "react-router";
import { routesConfig } from "~/config/routes";

const mainApplicationConfig = routesConfig.applications.main;

const navigation = [
  { text: "Início", link: "" },
  {
    text: "Sobre nós",
    link: `${mainApplicationConfig.pathname}/${mainApplicationConfig.routes.aboutUs}`,
  },
  {
    text: "Docs",
    link: `${mainApplicationConfig.pathname}/${mainApplicationConfig.routes.documentation}`,
  },
  { text: "Componentes", link: "componentes" },
];

export function Header() {
  function isActiveLink(link: string) {
    const isHome = link === "/";

    if (isHome) {
      return link === window.location.pathname;
    }

    return window.location.pathname.includes(link);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Aplicação Micro-frontend</span>
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex gap-10">
          {navigation.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              className={`text-sm/6 font-semibold text-gray-900 ${
                isActiveLink(item.link) ? "text-purple-500" : ""
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
