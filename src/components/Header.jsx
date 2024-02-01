import Link from "next/link";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className="flex w-[1200px] justify-between m-auto pb-10">
      <Logo/>
      <ul className="flex gap-5">
        <Link href="./">
          <li>Home</li>
        </Link>

        <Link href="../blog">
          <li>Blog</li>
        </Link>

        <li>Contact</li>
      </ul>
      <input placeholder="search" type="text" className="bg-[#F4F4F5] p-2 rounded-md w-[166px]" />
    </div>
  );
};
export default Header;
