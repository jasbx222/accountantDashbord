"use client"
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import SideMenu from "../sidemenu/SideMenu";
import "./ButtonShowMenu.css";
const ButtonShowMenu = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HandleButtonMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="">
      {isMobile && (
        <button className="btn " onClick={HandleButtonMenu}>
          <AlignJustify size={40} />
        </button>
      )}
      <div className="flex justify-around items-center">
        {show && <SideMenu />}
      </div>
    </div>
  );
};

export default ButtonShowMenu;
