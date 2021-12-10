import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Contact from "./Contact";

function Widgets() {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
      setContacts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="hidden lg:flex flex-col mt-5 p-2 w-60 ">
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts?.map((contact) => (
        <Contact 
            key={contact.data.id}
            src={contact.data.src}
            name={contact.data.name}
        />
      ))}
    </div>
  );
}

export default Widgets;
