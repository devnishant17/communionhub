import React from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="outline-none">
        <div className="p-3 rouned-xl flex gap-x-4  bg-white rounded-full items-center hover:shadow-sm cursor-pointer hover:shadow-white ">
          <IoMenu className="text-3xl text-[#fcb600]" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] text-black bg-amber-100 mt-4 mr-10">
        <DropdownMenuItem className="hide-small "><Link href="/Events">Home</Link></DropdownMenuItem>
        <DropdownMenuItem className="hide-small "><Link href="/About">Services</Link></DropdownMenuItem>
        <DropdownMenuItem>Our Story</DropdownMenuItem>
        <DropdownMenuItem className="hide-small ">About</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>Help Center</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
