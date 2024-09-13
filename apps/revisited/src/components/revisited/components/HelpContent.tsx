export function HelpContent({ submenu }: { submenu: string }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Help - {submenu}</h2>
        <p>This is the help content area. Current submenu: {submenu}</p>
      </div>
    )
  }