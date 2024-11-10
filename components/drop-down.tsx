import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Users} from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type items = {
    icons: any;
    label: string
}

type Props = {
    items: items[];
    head: string
}

export default function DropDownMenu(content: Props) {

    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 60) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="shadow-none outline-none">
        <Button variant="default" className={` bg-transparent ${isScrolled ? 'text-black': "text-white"} outline-none hover:bg-transparent`}>
          {content.head}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {content.items.map((items,index) => (
            <DropdownMenuItem key={index}>
                <div className="w-12 items-center flex justify-center">
                    {items.icons}
                </div>
            <span className="ml-4 py-2">{items.label}</span>
          </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}