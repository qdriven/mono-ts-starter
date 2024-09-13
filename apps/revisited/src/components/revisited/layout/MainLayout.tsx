'use client'

import { useState } from 'react'
import { MainSidebar } from './MainSidebar'
import { SubSidebar } from './SubSidebar'
import { ActiveMenu, ActiveSubmenu, MenuItem } from '@/data/menu_types'
import { MainContent } from '../components/MainContent'

export function MainLayout() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<ActiveSubmenu>(null)

  const handleSetActiveMenu = (menu: MenuItem) => {
    setActiveMenu(menu)
    setActiveSubmenu(menu.subMenus[0])
  }

  return (
    <div className="flex h-screen">
      <MainSidebar activeMenu={activeMenu} setActiveMenu={handleSetActiveMenu} />
      <SubSidebar
        activeMenu={activeMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <MainContent activeMenu={activeMenu} activeSubmenu={activeSubmenu} />
    </div>
  )
}