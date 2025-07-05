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
          <DropdownMenuItem>Sobre Mim</DropdownMenuItem>
           <DropdownMenuItem>Habilidades</DropdownMenuItem>
          <DropdownMenuItem>Projectos</DropdownMenuItem>
          <DropdownMenuItem>Contactos</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <img src="/img/logo4.png" alt="Logotipo" />
      </div>
    </header>
  );
};
