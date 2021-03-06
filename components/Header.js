import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useAppValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useAppValue();

  return (
    <div className="bg-white flex items-center p-2 shadow-md sticky top-0 z-50 lg:px-5">
      {/*Left*/}
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="bg-gray-100 flex items-center ml-2 p-2 rounded-full ">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="bg-transparent sm:flex flex-shrink hidden items-center ml-2 outline-none placeholder-gray-500 md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/*Center*/}
      <div className="flex flex-grow justify-center ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*Right*/}
      <div className="flex items-center justify-end sm:space-x-2">
        <Image
          className="cursor-pointer rounded-full"
          src={user.photoURL}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="hidden font-semibold pr-3 whitespace-nowrap lg:inline-flex">
          {user.displayName}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
