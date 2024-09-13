import { Button } from "@/components/ui/button"
import { ActiveMenu,ActiveSubmenu } from "@/data/menu_types"

type SubSidebarProps = {
  activeMenu: ActiveMenu;
  activeSubmenu: ActiveSubmenu;
  setActiveSubmenu: (submenu: string) => void;
}

export function SubSidebar({ activeMenu, activeSubmenu, setActiveSubmenu }: SubSidebarProps) {
  if (!activeMenu) return null

  return (
    <div className="w-64 border-r bg-gray-50 p-4">
      <h2 className="text-lg font-semibold mb-4">{activeMenu.label}</h2>
      {activeMenu.subMenus.map((submenu) => (
        <Button
          key={submenu}
          variant={activeSubmenu === submenu ? "secondary" : "ghost"}
          className="w-full justify-start mb-2"
          onClick={() => setActiveSubmenu(submenu)}
        >
          {submenu}
        </Button>
      ))}
    </div>
  )
}