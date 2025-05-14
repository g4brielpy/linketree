import { LinkHeader } from "../LinkHeader";
import { RiLogoutBoxLine } from "react-icons/ri";

export function HeaderPrivite() {
  return (
    <header className="px-4 py-3 bg-white rounded-sm">
      <nav className="flex items-center gap-8  font-semibold sm:text-lg md:text-xl">
        <button
          className="
            cursor-pointer p-1 rounded-md
            text-red-800 hover:text-red-600
            transition-colors duration-300 ease-in-out
            hover:bg-red-100
          "
        >
          <RiLogoutBoxLine size={30} className="text-red-800 " />
        </button>
        <LinkHeader to="/">Home</LinkHeader>
        <LinkHeader to="/admin">Links</LinkHeader>
        <LinkHeader to={"/admin/networks"}>Redes Sociais</LinkHeader>
      </nav>
    </header>
  );
}
