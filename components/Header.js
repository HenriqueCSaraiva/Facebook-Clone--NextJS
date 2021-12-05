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

function Header() {
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
            className="bg-transparent flex flex-shrink hidden items-center ml-2 outline-none placeholder-gray-500 md:inline-flex"
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
        <p className="font-semibold pr-3 whitespace-nowrap">User Name</p>
        <ViewGridIcon className="bg-gray-200 cursor-pointer h-10 hidden p-2 rounded-full text-gray-70 xl:inline-flex w-10 hover:bg-gray-300" />
        <ChatIcon className="bg-gray-200 cursor-pointer h-10 hidden p-2 rounded-full text-gray-70 xl:inline-flex w-10 hover:bg-gray-300"/>
        <BellIcon className="bg-gray-200 cursor-pointer h-10 hidden p-2 rounded-full text-gray-70 xl:inline-flex w-10 hover:bg-gray-300"/>
        <ChevronDownIcon className="bg-gray-200 cursor-pointer h-10 hidden p-2 rounded-full text-gray-70 xl:inline-flex w-10 hover:bg-gray-300"/>
      </div>
    </div>
  );
}

export default Header;
