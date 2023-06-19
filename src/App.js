import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Spinner from "./Components/Spinner";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";

const App = () => {
  const [cources, setcources] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setcources(data.data);
      } catch (err) {
        console.log(err);
        toast.err("something went wrong");
      }
      setloading(false);
    };

    fetchdata();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="bg-bgDark2 flex-grow">
        <div>
          <Filter
            setcategory={setcategory}
            category={category}
            filterData={filterData}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center flex-wrap">
          {loading ? (
            <Spinner />
          ) : (
            <Cards cources={cources} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
