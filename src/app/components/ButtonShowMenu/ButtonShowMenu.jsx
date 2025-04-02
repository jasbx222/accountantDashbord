"use client"
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import SideMenu from "../sidemenu/SideMenu";
import "./ButtonShowMenu.css";
const ButtonShowMenu = () => {
  const [show, setShow] = useState(false
  );

  const HandleButtonMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="">
      
        <button className="btn " onClick={HandleButtonMenu}>
          <AlignJustify size={40} />
        </button>
     
      <div className="flex justify-around items-center">
        {show && <SideMenu />}
      </div>
    </div>
  );
};

export default ButtonShowMenu;
