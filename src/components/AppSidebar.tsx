
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Jobs", path: "/jobs", icon: Briefcase },
  { name: "Candidates", path: "/candidates", icon: Users },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "bg-sidebar-accent text-primary font-medium w-full flex items-center gap-3 px-3 py-2 rounded-md"
      : "text-sidebar-foreground hover:bg-sidebar-accent/50 w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors";
  };

  return (
    <Sidebar
      className={`border-r ${collapsed ? "w-16" : "w-64"}`}
      collapsible="icon"
    >
      <div className="flex h-16 items-center justify-center border-b">
        {collapsed ? (
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TS</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TS</span>
            </div>
            <span className="font-bold text-lg">TalentSphere</span>
          </div>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.path} end={item.path === "/"} className={getNavLinkClass}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
