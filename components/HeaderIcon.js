function HeaderIcon({ Icon, active }) {
  return (
    <div className="cursor-pointer flex items-center rounded-xl active:border-b-2 active:border-blue-500 md:px-10 md:hover:bg-gray-100 sm:h-14">
      <Icon
        className={`h-5 text-center text-gray-500 mx-auto sm:h-7 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
