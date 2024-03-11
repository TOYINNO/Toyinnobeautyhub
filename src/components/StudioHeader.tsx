import Link from "next/link";
import logo from "@/assets/logo-no-background.png";
import Image from "next/image";
import { IoReturnDownBack } from "react-icons/io5";

export const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-purple-700 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center justify-between font-semibold hover:text-purple-400"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Image src={logo} alt="logo" className="w-24" />
        <p className="text-sm">Admin Studio for toyinno beautyhub</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};
export default StudioHeader;
