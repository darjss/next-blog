import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:4000/api/design").then(
      (response) => response.json()
    );
    console.log(res);
    setData(res);
  };
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center gap-10 ">
      <p className="py-12 text-2xl font-bold">All Blog Post</p>
      <NavBar />
      <div className="flex flex-wrap  gap-5">
        {data.map((news, i) => {
          return <Card data={news} key={i} />;
        })}
      </div>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   const data = await fetch("https://dev.to/api/articles?tag=design").then(
//     (response) => response.json()
//   );
//   return {
//     props: {
//       data,
//     },
//   };
// }
export default Page;
