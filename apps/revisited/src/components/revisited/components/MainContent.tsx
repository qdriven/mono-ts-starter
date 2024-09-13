import { HomeContent } from "./HomeContent"

import { HelpContent } from "./HelpContent"
import { BlogConent } from "./BlogContent"
import { ActiveMenu, ActiveSubmenu } from "@/data/menu_types";
import { SettingsContent } from "./SettingContent";

type MainContentProps = {
    activeMenu: ActiveMenu;
    activeSubmenu: ActiveSubmenu;
}

export function MainContent({ activeMenu, activeSubmenu }: MainContentProps) {
    if (!activeMenu || !activeSubmenu) {
        return (
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-4">Welcome</h1>
                <p>Please select a menu and submenu to view content.</p>
            </div>
        )
    }

    const contentComponents = {
        Home: HomeContent,
        Blog: BlogConent,
        Settings: SettingsContent,
        Help: HelpContent,
    } as const;
    type ContentKey = keyof typeof contentComponents;
    const ContentComponent = contentComponents[activeMenu.label as ContentKey];

    return (
        <div className="flex-1 p-8">
            {ContentComponent && <ContentComponent submenu={activeSubmenu} />}
        </div>
    )
}