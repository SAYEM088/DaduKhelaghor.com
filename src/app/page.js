import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-300 h-screen">
      <div>
      <Image src='/logo/logo.png' width={500} height={500}/>
      </div>
    </div>
  );
}
