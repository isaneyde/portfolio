
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
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white m-4 fixed">
          <Menu />
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
