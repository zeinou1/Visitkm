import SectionCommon from "../shared/SectionCommun.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import HotelsCard from "./HotelsCard.jsx";
import NewsLetter from "../shared/Newsletter.jsx";


const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <SectionCommon title={"Search Result"} />
      <section>
        <div className="container">
          <div className="flex items-center flex-wrap gap-8">
            {data.length === 0 ? (
              <h4 className="text-center">Result not found</h4>
            ) : (
              data?.map((item) => (
                <div key={item._id} className="mb-4 w-[300px]">
                  <HotelsCard data={item} />
                </div>
              ))
            )}
          </div>
          <NewsLetter />
        </div>
      </section>
    </>
  );
};
export default SearchResultList;
