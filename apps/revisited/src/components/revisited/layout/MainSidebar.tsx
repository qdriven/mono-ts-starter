import { HomeIcon, FileTextIcon, SettingsIcon, HelpCircleIcon } from "lucide-react"
import { MenuItem,ActiveMenu } from "@/data/menu_types";
import { MenuButton } from "./MenuButton";

const menuItems: MenuItem[] = [
  { icon: HomeIcon, label: "Home", subMenus: ["Dashboard", "Analytics"] },
  { icon: FileTextIcon, label: "Blog", subMenus: ["All Files", "Shared", "Recent"] },
  { icon: SettingsIcon, label: "Settings", subMenus: ["Profile", "Security", "Notifications"] },
  { icon: HelpCircleIcon, label: "Help", subMenus: ["FAQs", "Contact Support"] },
]

type MainSidebarProps = {
  activeMenu: ActiveMenu;
  setActiveMenu: (menu: MenuItem) => void;
}

export function MainSidebar({ activeMenu, setActiveMenu }: MainSidebarProps) {
  return (
    <div className="w-16 border-r bg-gray-100 flex flex-col items-center py-4">
      {menuItems.map((item) => (
        <MenuButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeMenu?.label === item.label}
          onClick={() => setActiveMenu(item)}
        />
      ))}
    </div>
  )
}