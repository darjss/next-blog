const Card = (props) => {
  console.log(props);
  let data = props.data;
  console.log(data);
  let date = data.published_at;
  return (
    <div className="w-1/3 p-[16px] border-2 border-solid border-gray-100 flex justify-center flex-col  gap-3 text-left">
      <img className="rounded-xl w-full" src={data.social_image} alt="" />
      <p>{data.tags}</p>
      <p>{data.title}</p>
      <p>{date}</p>
    </div>
  );
};
export default Card;
