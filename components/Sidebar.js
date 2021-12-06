// import {useSession} from "next-auth..."
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="mt-5 p-2 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Golden-eyed_tree_frog_%28Agalychnis_annae%29.jpg/500px-Golden-eyed_tree_frog_%28Agalychnis_annae%29.jpg"
        title="UserName"
      />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
