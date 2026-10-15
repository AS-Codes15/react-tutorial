import SidebarListItem from "./SidebarListItem";

function SidebarComponent() {
  const sidebarList = [
    {
      name: "Expenses",
      path: "/",
      icon: "insights",
    },
    {
      name: "Add Expenses",
      path: "/Add",
      icon: "note_add",
    },
    {
      name: "Analytics",
      path: "/Analytics",
      icon: "analytics",
    }
  ];
    
  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar-container__brand">Expense Tracker</div>
        <div className="sidebar-container__list">
          <ul>
            {sidebarList.map((item, index) => {
              return <SidebarListItem key={index} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;