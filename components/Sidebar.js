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
import { useAppValue } from "../StateProvider";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [{ user }, dispatch] = useAppValue();

  return (
    <div className="hidden sm:flex flex-col mt-5 sm:p-2 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={user.photoURL} title={user.displayName} />
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
