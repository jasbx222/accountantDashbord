
import Link from "next/link";

const SideMenuLink = ({ label, href, icon }) => {
  return (
    <Link href={href} className="flex items-center gap-2 p-3 hover:bg-white">
      {icon}
      {label}
    </Link>
  );
};

export default SideMenuLink;
