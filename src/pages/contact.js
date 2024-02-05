import { useState, useEffect } from "react";
const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:4000/api/users").then(
      (response) => response.json()
    );
    console.log(res);
    setData(res);
  };
  return (
    <div>
      {data.map((a) => {
        return <p>{a.name}</p>;
      })}
    </div>
  );
};
export default Page;
