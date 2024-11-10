import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Users} from "lucide-react"

type items = {
    icons: any;
    label: string
}

type Props = {
    items: items[];
    head: string
}

export default function DropDownMenu(content: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className=" bg-transparent outline-none hover:bg-[#13141E]">
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