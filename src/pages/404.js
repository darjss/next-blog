import Link from "next/link";
const Page = () => {
  return (
    <div className="flex m-auto w-[640px] gap-3">
      <div>
        <p className="text-7xl">404</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold">Page not found</p>
        <p>
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href="./">
          <button className="self-start text-[14px] bg-[#4B6BFB] px-4 py-2 text-white rounded-lg">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
