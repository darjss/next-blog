import Card from "../../components/Card";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
const Page = ({ data }) => {
  const [articles, setArticles] = useState(data);
  const [pageNum, setPageNum] = useState(4);
  const loadMoreHandler = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=3&page=${pageNum}`
    ).then((response) => response.json());
    setPageNum(pageNum + 1);
    setArticles([...articles, ...response]);
  };
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center  gap-10 ">
      <p className="py-12 text-2xl font-bold">All Blog Post</p>
      <NavBar />
      <div className="flex flex-wrap gap-5">
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
};
export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:4000/api/blog").then((response) =>
    response.json()
  );
  return {
    props: {
      data,
    },
  };
}
export default Page;
