import Link from "next/link";
const TrendingCard = ({ data }) => {
  return (
    <Link href={`/${data.id}`}>
      <div className={`w-[289px] h-[320px] relative `}>
        <img
          className=" object-cover absolute `w-[289px] h-[320px] rounded-xl"
          src={data.social_image}
          alt="placeholder"
        />
        <div className="absolute left-[28px] bottom-[28px] text-white flex flex-col gap-5">
          <div className="p-3 bg-blue-600 w-fit h-fit rounded-lg">
            <p>{data.tags}</p>
          </div>
          <p className="text-xl font-semibold">{data.title}</p>
        </div>
      </div>
    </Link>
  );
};
export default TrendingCard;
