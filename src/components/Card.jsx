import Link from "next/link";
const Card = (props) => {
  console.log(props);
  let data = props.data;
  // console.log(data);
  let date =data.published_at;
  return (
    <div className="w-[32%] p-[16px] border-2 border-solid border-gray-100 flex justify-center flex-col  gap-3 text-left rounded-xl">
      <Link href={`/${data.id}`}>
        <img
          className="rounded-xl w-[360px] h-[200px]"
          src={data.social_image}
          alt=""
        />
        <div className="bg-[#4B6BFB0D] px-[10px] py-[4px] w-fit">
          <p className="text-[#4B6BFB]">{data.tags}</p>
        </div>

        <p className="text-[#181A2A] font-semibold text-[24px] ">
          {data.title}
        </p>
        <p>{date}</p>
      </Link>
    </div>
  );
};
export default Card;
