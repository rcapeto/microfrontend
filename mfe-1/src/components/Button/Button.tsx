import { ArrowLeft, ArrowRight } from "lucide-react";
import { FunctionComponent } from "react";
import css from "~/components/styles.css?inline";
import { ButtonIcon, ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  function getCurrentIcon() {
    const icons: Record<
      ButtonIcon,
      FunctionComponent<{ className?: string }>
    > = {
      arrow_left: ArrowLeft,
      arrow_right: ArrowRight,
    };

    if (props.icon) {
      return icons[props.icon] ?? null;
    }

    return null;
  }

  console.log(">>> Render MFE Button", { props });
  const Icon = getCurrentIcon();

  return (
    <>
      <style mfe-button-style>{css}</style>

      <button
        className={`flex items-center gap-2 bg-purple-500 p-2 rounded text-white cursor-pointer hover:bg-purple-700 transition-colors shadow-lg ${
          props.className ?? ""
        }`}
      >
        {props.text}
        {Icon && <Icon className="size-4" />}
      </button>
    </>
  );
}
