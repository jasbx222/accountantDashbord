"use client"
import logo from "../../assets/img/Accountant-bro.png";
import Image from "next/image";
import { useState } from "react";
import {
  BadgePlus,
  ClipboardPlus,
  GitPullRequest,
  HouseIcon,
  FileWarning,
  LogOut,
  Settings,
  Shapes,
  Signpost,
  User,
  CalendarCog,
  HandCoins,
  UsersRound,
  BadgeDollarSign,
  FolderKanban,
} from "lucide-react";
import "./SideMenu.css";
import SideMenuLink from "./SideMenuLink";
export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`
          fixed
          overflow-auto 
         
           z-30 top-0 left-0 h-full  sidemenu text-gray-950  w-64 transform 
          "translate-x-0"  "-translate-x-full
         transition-transform duration-300 ease-in-out md:translate-x-0
          
          `}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            <Image className="logo" src={logo} alt="kkk" width={100} height={100} />
          </h2>
        </div>

        <nav className="mt-4 ">
          {/* <div className="user text-center">   <h1>Hello {user}</h1></div> */}
          <SideMenuLink
            href={"/"}
            label={"الصفحة الرئيسية"}
            icon={<HouseIcon />}
          />

          <SideMenuLink
            href={"/customer"}
            label={"ادارة العملاء "}
            icon={<FolderKanban />}
          />

          <SideMenuLink
            href={"/report"}
            label={"التقارير المالية "}
            icon={<BadgeDollarSign />}
          />

          <SideMenuLink
            href={"/customers"}
            label={"العملاء "}
            icon={<UsersRound />}
          />

          <SideMenuLink
            href={"/moneymanage"}
            label={" المقبوضات والمصروفات "}
      
            icon={<HandCoins />}
          />

      

          <div className="relative inline-block">
            {/* Button to open dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ width: "250px" }}
              className="flex  items-center   gap-2 p-3  text-gray-950 px-4 py-2 hover:bg-white transition"
            >
              <Settings />
              الاعدادات
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute text-gray-950  left-0 mt-2 w-56bg-gray-800 shadow-lg rounded-lg border border-gray-950 z-10">
                <ul className="py-1">
                  <li>
                    <SideMenuLink
                      href={"/accountSettings"}
                      label={"اعدادات المستخدم "}
                      icon={<User />}
                    />
                  </li>
            
                  <li className="text-gray-950 ">
                    <SideMenuLink
                      href={"/logout"}
                      icon={<LogOut />}
                      label={"تسجيل خروج"}
                    />
                  </li>
             
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
