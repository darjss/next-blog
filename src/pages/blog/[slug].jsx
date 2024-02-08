import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
import { useState } from "react";
import { useRouter } from "next/router";
const Page = ({ data }) => {
  const [articles, setArticles] = useState(data);
  const [pageNum, setPageNum] = useState(4);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const loadMoreHandler = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?tag=${slug.toLocaleLowerCase()}per_page=3&page=${pageNum}`
    ).then((response) => response.json());
    setPageNum(pageNum + 1);
    setArticles([...articles, ...response]);
  };
  console.log(data);
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center gap-10 ">
      <p className="py-12 text-2xl font-bold">All Blog Post</p>
      <NavBar />
      <div className="flex flex-wrap  gap-5">
        {data.map((news, i) => {
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
export default Page;
export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(context.query);
  console.log(slug);

  const data = await fetch(
    `https://dev.to/api/articles${
      slug == "All" ? "" : "?tag=" + slug.toLowerCase()
    }`
  ).then((response) => response.json());
  // const data = await fetch(
  //   `https://dev.to/api/articles?tag=${slug.toLowerCase()}`
  // ).then((response) => response.json());
  return {
    props: {
      data,
    },
  };
}
