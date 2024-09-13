export function BlogConent({ submenu }: { submenu: string }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Documents - {submenu}</h2>
        <p>This is the documents content area. Current submenu: {submenu}</p>
      </div>
    )
  }