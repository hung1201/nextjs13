import React from "react";

type SearchRes = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snipper: string;
    }
  ];
};

type PageProps = {
  params: {
    search: string;
  };
};

const fetchSearch = async (search: string) => {
  // throw new Error("Hold up! Wait a minute! Something ain't right");

  const res = await fetch(
    `https://serpapi.com/search.json?q=${search}&api_key=${process.env.API_KEY}`
  );
  const data: SearchRes = await res.json();
  return data;
};

async function SearchResultPage({ params: { search } }: PageProps) {
  const searchRes = await fetchSearch(search);
  return (
    <div>
      <p className="text-gray-500 text-sm">Search for: {search}</p>
      <ul className="space-y-5 p-5">
        {searchRes?.organic_results?.map((item) => (
          <li key={item.position} className="list-decimal">
            <p className="font-bold">{item.title}</p>
            <p>{item.snipper}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultPage;
