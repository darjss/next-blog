import { useRouter } from "next/router";
const Page = ({news}) => {
  return (
    <div>
      <p>{news.title}</p>
    <img src={news.social_image} alt="" />
    </div>
  );
};
export default Page;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const news = await fetch(`https://dev.to/api/articles/${id}`).then(
    (response) => response.json()
  );
  return {
    props: {
      news,
    },
  };
}
