const Hlcard = ({ data, index }) => {
  return (
    <div
      id={`img${index}`}
      className="carousel-item relative w-full flex flex-col rounded-xl"
    >
      <img src={data.social_image} alt="image" className="w-full rounded-xl" />
      <div className="w-[598px] p-10 absolute left-[11px] bottom-[13px] bg-white flex flex-col gap-4 rounded-xl">
        <div className="bg-[#4B6BFB] px-[4px] py-[10px] rounded-md text-white w-fit">
          <p>{data.tags}</p>
        </div>
        <p className="text-4xl font-semibold">{data.title}</p>
        <p>{data.published_at}</p>
      </div>
      <div className="flex gap-2 absolute right-0 bottom-0">
        <a href={`#img${index - 1}`}>
          <button className="btn"> &lt;</button>
        </a>
        <a href={`#img${index + 1}`}>
          <button className="btn">&gt;</button>
        </a>
      </div>
    </div>
  );
};
export default Hlcard;
