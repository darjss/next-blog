import Link from "next/link";
import Logo from "./Logo";
import { useSearch } from "@/context/SearchContext";
const Header = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <div className="flex w-[1200px] justify-between m-auto pb-10">
      <Link href="./">
        <Logo />
      </Link>

      <ul className="flex gap-6">
        <Link href="./">
          <li>Home</li>
        </Link>

        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="flex gap-5">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="search"
          type="text"
          className="bg-[#F4F4F5] p-2 rounded-md w-[166px]"
        />
        <Link href="/search">
          <button className="btn btn-circle btn-outline">🔎</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
