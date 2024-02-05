import Card from "../components/Card";
import TrendingCard from "../components/TrendingCard";
import Hlcard from "../components/Hlcard";
import { useState, useEffect } from "react";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [pageNum, setPageNum] = useState(4);
  const [trending, setTrending] = useState([]);
  const loadMoreHandler = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=3&page=${pageNum}`
    ).then((response) => response.json());
    setPageNum(pageNum + 1);
    setArticles([...articles, ...response]);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:4000/api/blog").then((response) =>
      response.json()
    );
    const data = await fetch("http://localhost:4000/api/trending").then(
      (response) => response.json()
    );
    console.log(res);
    setTrending(data);
    setArticles(res);
  };
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center  gap-10 ">
      <div className="carousel w-full">
        {trending.map((a, i) => {
          return <Hlcard data={a} key={i} index={i + 1} />;
        })}
      </div>
      <p className="text-2xl font-semibold">Trending</p>
      <div className="flex gap-4">
        {trending.map((a, i) => {
          return <TrendingCard data={a} key={i} />;
        })}
      </div>
      <p className="text-2xl font-semibold">All Blog Post</p>
      <div className="flex flex-wrap gap-4">
        {articles.map((news, i) => {
          return <Card data={news} key={i} />;
        })}
      </div>
      <button
        onClick={loadMoreHandler}
        className="border p-2 rounded-md w-fit self-center"
      >
        Load More
      </button>
    </div>
  );
}
// export async function getServerSideProps(context) {
//   console.log(context);
//   const trending = await fetch(
//     "https://dev.to/api/articles?  "
//   ).then((response) => response.json());
//   const data = await fetch("https://dev.to/api/articles?per_page=9").then(
//     (response) => response.json()
//   );
//   return {
//     props: {
//       data,
//       trending,
//     },
//   };
// }
