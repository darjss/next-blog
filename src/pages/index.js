import Card from "../components/Card";
import TrendingCard from "../components/TrendingCard";
import Header from "../components/Header";
import Hlcard from "../components/Hlcard";
export default function Home({ data, trending }) {
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center items-center gap-10">
      <Hlcard data={data[5]} />
      <div className="flex">
        {trending.map((a, i) => {
          return <TrendingCard data={a} key={i} />;
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        {data.map((news, i) => {
          return <Card data={news} key={i} />;
        })}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const trending = await fetch(
    "https://dev.to/api/articles?top=1&per_page=4"
  ).then((response) => response.json());
  const data = await fetch("https://dev.to/api/articles").then((response) =>
    response.json()
  );
  return {
    props: {
      data,
      trending,
    },
  };
}
