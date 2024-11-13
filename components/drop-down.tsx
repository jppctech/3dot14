import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Users} from "lucide-react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type items = {
    label: string;
    link: string;
}

type Props = {
    items: items[];
    head: string
}

export default function DropDownMenu(content: Props) {

    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    const handleroute = (url: string) => {
      router.push(url)
    }

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

        const length = content.items.length;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="shadow-none outline-none">
        <Button variant="default" className={` bg-transparent text-black outline-none hover:bg-transparent hover:text-cyan-600 group relative items-center justify-center`}>
          <Link href={`${content.head == "Blogs"? "/blog-page": content.head == "About us" ? "/about-us": content.head == "Home" ? "/" : ""}`}>
            {content.head}
          </Link>
          <div className={`w-12 ${length > 0 ? "-ml-6": ""} h-[1px] group-hover:bg-cyan-600 absolute bottom-0`}/>
          {length > 0 && <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
        {length > 0 && (
      <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {content.items.map((items,index) => (
                <DropdownMenuItem key={index} onClick={() => handleroute(items.link)}>
                  <span className="ml-4 py-2 font-[500]">{items.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
      </DropdownMenuContent>
        )}
    </DropdownMenu>
  )
}