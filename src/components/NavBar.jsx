const { default: Link } = require("next/link");

const NavBar = () => {
  const titles = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];
  return (
    <div>
      <div className="flex gap-5">
        {titles.map((a) => {
          return (
            <Link href={`../blog/${a}`}>
              <button className="btn btn-active btn-neutral bg-white text-black">
                {a}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default NavBar;
