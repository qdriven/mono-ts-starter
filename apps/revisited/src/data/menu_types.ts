import { LucideIcon } from 'lucide-react'

export type MenuItem = {
  icon: LucideIcon;
  label: string;
  subMenus: string[];
}
//find sub menu by the label, which is the active sub menu
export type ActiveMenu = MenuItem | null

export type ActiveSubmenu = string | null