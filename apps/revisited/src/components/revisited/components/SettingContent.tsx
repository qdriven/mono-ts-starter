export function SettingsContent({ submenu }: { submenu: string }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Settings - {submenu}</h2>
        <p>This is the settings content area. Current submenu: {submenu}</p>
      </div>
    )
  }