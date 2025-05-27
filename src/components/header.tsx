//import { Button} from "@/components/ui/button"
import { ListIcon } from "@phosphor-icons/react";
//const buttonStyle="bg-violet-700 font-serif font-bold text-white pointer-events-none"
export const Header = () => {
  return (
    <header>
      <div className="w-screen h-20 bg-gradient-to-r from-red-400 to-violet-700">
        <h1 className=" font-mono text-white font-bold ml-4">
       ISA NEIDE SITOE
        </h1>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4">
        <ListIcon size={32} fill="white" weight="bold" className="justify-self-end mr-5" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-white text-black min-h-60 w-80 p-4 mt-5 mr-5 rounded-2xl">
              {/* Sidebar content here */}
              <li>
                <a>Sobre Mim</a>
              </li>
              <li>
                <a>Projectos</a>
              </li>
              <li>
                <a>Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
