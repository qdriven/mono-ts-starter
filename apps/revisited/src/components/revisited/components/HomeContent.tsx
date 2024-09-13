export function HomeContent({ submenu }: { submenu: string }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Home - {submenu}</h2>
        <p>This is the home content area. Current submenu: {submenu}</p>
      </div>
    )
  }