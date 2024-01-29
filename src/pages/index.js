import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="w-[1200px]">
     
      <Card data={data[1]} />
    </div>
  );
}
export async function getStaticProps() {
      const data = await fetch("https://dev.to/api/articles?top=1").then(
        (response) => response.json()
      );
  return {
    props: {
      data,
    },
  }
}