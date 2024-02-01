import Card from "../components/Card";
import TrendingCard from "../components/TrendingCard";
import Hlcard from "../components/Hlcard";
import { useState } from "react";
export default function Home({ data, trending }) {
  const [articles, setArticles] = useState(data);
  const [pageNum, setPageNum] = useState(4);
  const loadMoreHandler = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=3&page=${pageNum}`
    ).then((response)=>response.json());
    setPageNum(pageNum + 1);
    setArticles([...articles , ...response])
  };
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center items-center gap-10 ">
      <div className="carousel w-full">
        {trending.map((a, i) => {
         return <Hlcard data={a} key={i} index={i + 1} />;
        })}
      </div>
      <div className="flex">
        {trending.map((a, i) => {
          return <TrendingCard data={a} key={i} />;
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        {articles.map((news, i) => {
          return <Card data={news} key={i} />;
        })}
      </div>
      <button onClick={loadMoreHandler} className="border p-2 rounded-md">
        Load More
      </button>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const trending = await fetch(
    "https://dev.to/api/articles?top=1&per_page=4"
  ).then((response) => response.json());
  const data = await fetch("https://dev.to/api/articles?per_page=9").then(
    (response) => response.json()
  );
  return {
    props: {
      data,
      trending,
    },
  };
}
