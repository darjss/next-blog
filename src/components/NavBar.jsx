const { default: Link } = require("next/link");

const NavBar = () => {
  const listArr = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];
  return (
    <div>
      <ul className="flex gap-5">
        {listArr.map((a) => {
          return (
            <Link href={`/blog/${a}`}>
              <li>{a}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default NavBar;
