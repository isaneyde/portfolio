
import { Link } from "react-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-end max-w-full">
      <nav className="hidden md:flex font-bold text-white absolute top-0 w-full justify-end p-4 gap-8">
        <Link to="about" smooth={true} duration={600} className="cursor-pointer  hover:bg-blue-950 transition-colors duration-300 rounded-xl p-2">Sobre Mim</Link>
        <Link to="projects" smooth={true} duration={600} className="cursor-pointer  hover:bg-blue-950 transition-colors duration-300 rounded-xl p-2">Projectos</Link>
        <Link to="contact" smooth={true} duration={600} className="cursor-pointer  hover:bg-blue-950 transition-colors duration-300 rounded-xl p-2">Contactos</Link>
      </nav>
      
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white m-4 fixed">
          <Menu className="md:hidden" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-bold font-mono center text-gray-950">
          <DropdownMenuItem>
            <Link to="about" smooth={true} duration={600}>Sobre Mim</Link>
          </DropdownMenuItem>
         
          <DropdownMenuItem>
            <Link to="projects" smooth={true} duration={600}> Projectos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="contact" smooth={true} duration={600}>Contactos</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <img src="/img/logo4.png" alt="Logotipo" />
      </div>
    </header>
  );
};
