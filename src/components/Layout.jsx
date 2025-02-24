import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./SideBar";
import Header from "./Header";
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <>
        <Sidebar
          sidebar={<SidebarContent setSidebar={setSidebarOpen} />}
          open={sidebarOpen}
          onSetOpen={setSidebarOpen}
        >
          <Header handleSidebar={setSidebarOpen} />
          <Outlet />
        </Sidebar>
      </>
    </>
  );
}
