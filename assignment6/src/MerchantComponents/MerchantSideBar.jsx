//Component that renders teh side bar of the application for user navigation
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
//the setCurrentPage() function changes currentPage telling the application what to render.
function MerchantSidebar({ currentPage, setCurrentPage }) {
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <p>Huffmans Store</p>
        <SidebarItemGroup>
          <SidebarItem onClick={() => setCurrentPage("Welcome")}>
            Welcome
          </SidebarItem>
          <SidebarItem onClick={() => setCurrentPage("AllItems")}>
            All Items
          </SidebarItem>
          <SidebarItem onClick={() => setCurrentPage("AddItem")}>
            Add Items
          </SidebarItem>
          <SidebarItem onClick={() => setCurrentPage("Metrics")}>
            Metrics
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem>Sign out</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
//exports the sidebar to be used in the appliation.
export default MerchantSidebar;
