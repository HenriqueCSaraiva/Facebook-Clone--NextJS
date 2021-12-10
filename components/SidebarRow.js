import Image from "next/image";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className=" flex items-center p-4 space-x-2 hover:bg-gray-200 rounded-xl cursor-pointer ">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-6 sm:h-8 text-blue-500 w-8" />}
        <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
