import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const { children, onClick } = props;

  function handleClick() {
    onClick?.();
  }

  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer rounded shadow-lg text-white p-2 transition-colors"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
