import parse from "html-react-parser";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Page = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();
  const { id } = router.query;
  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/articles/${id}`).then(
      (response) => response.json()
    );
    console.log(res);
    setNews(res);
  };
  return (
    <div className="w-[1200px] m-auto">
      <p>{news.title}</p>
      <div className="flex">
        <img src={news.user.profile_image_90} alt="" />
        <p>{news.user.name}</p>
      </div>
      <img src={news.social_image} alt="" />
      <p>{parse(news.body_html)}</p>
    </div>
  );
};
export default Page;
// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const news = await fetch(`https://dev.to/api/articles/${id}`).then(
//     (response) => response.json()
//   );
//   return {
//     props: {
//       news,
//     },
//   };
// }
