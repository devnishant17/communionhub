import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
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
        <div className="p-3 rouned-xl flex gap-x-4 text-black/70 bg-white rounded-full items-center hover:shadow-sm cursor-pointer hover:shadow-white ">
          <IoMenu className="text-3xl text-[#00AEEF]" />
          <FaRegCircleUser className="text-3xl text-[#00AEEF]" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] bg-amber-100 mt-4 mr-10">
        <DropdownMenuItem>Sign up</DropdownMenuItem>
        <DropdownMenuItem>Login</DropdownMenuItem>
        <DropdownMenuItem>Event</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Help Center</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
