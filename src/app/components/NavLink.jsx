import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 text-sm font-medium text-[#ADB7BE] hover:text-white transition-colors relative group"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default NavLink;
