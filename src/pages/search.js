import { useSearch } from "@/context/SearchContext";
import Card from "@/components/Card";
const Search = ({ data }) => {
  const { searchValue, setSearchValue } = useSearch();
  const results = data.filter((el) => {
    let title = el.title;
    return title.includes(searchValue);
  });
  return (
    <div className="w-[1200px] flex flex-col m-auto justify-center  gap-10 flex-wrap ">
      <p className="py-12 text-2xl font-bold">Search Results</p>
      <div className="flex flex-wrap gap-4">
        {results.map((el, i) => {
          return <Card data={el} key={i} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch("https://dev.to/api/articles?per_page=999").then(
    (response) => response.json()
  );
  return {
    props: {
      data,
    },
  };
}
export default Search;
