import { LucideIcon } from "lucide-react"
import { Button } from "../../ui/button";

type MenuButtonProps = {
    icon: LucideIcon;
    label: string;
    isActive: boolean;
    onClick:()=>void;
}

export function MenuButton({icon:Icon,label,isActive,onClick}:MenuButtonProps){
    return (
        <Button
            variant={isActive?"secondary":"ghost"}
            size={"icon"}
            className="w-12 h-12 mb-4"
            onClick={onClick}
        >
            <Icon className="h-6 w-6"></Icon>
            <span className="sr-only">{label}</span>

        </Button>
    )
}