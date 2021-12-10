import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="cursor-pointer flex items-center mb-2 p-2 relative rounded-xl space-x-3 hover:bg-gray-200">
      <Image
        className="rounded-full"
        height={50}
        layout="fixed"
        objectFit="cover"
        src={src}
        width={50}
      />
      <p>{name}</p>
      <div className="absolute animate-bounce bottom-2 bg-green-400 h-3 left-7 rounded-full w-3"/>
    </div>
  );
}

export default Contact;
