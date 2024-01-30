const TrendingCard = ({ data }) => {
  return (
    <div
      style={`background-image:url(${data.social_image})`}
      className={`w-[289px] h-[320px] relative`}
    >
      {/* <img
        className=" object-fill  absolute"
        src={data.social_image}
        alt="placeholder"
      /> */}
      <div className="absolute left-[28px] bottom-[28px]">
        <p>{data.tags}</p>
        <p>{data.title}</p>
      </div>
    </div>
  );
};
export default TrendingCard;
