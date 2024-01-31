const Hlcard = ({ data }) => {
  return (
    <div className="relative w-full">
      <img src={data.social_image} alt="image" className="w-full rounded-xl" />
      <div className="w-[598px] p-10 absolute left-[11px] bottom-[13px] bg-white flex flex-col gap-4">
        <div className="bg-[#4B6BFB] px-[4px] py-[10px] rounded-md text-white w-fit">
          <p>{data.tags}</p>
        </div>
        <p className="text-4xl font-semibold">{data.title}</p>
        <p>{data.published_at}</p>
      </div>
    </div>
  );
};
export default Hlcard;
