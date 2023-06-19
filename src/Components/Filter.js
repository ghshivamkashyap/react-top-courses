import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setcategory = props.setcategory;

  function filterhandler(title) {
    setcategory(title);
  }

  return (
    <div className=" w-11/12 flex flex-wrap max-w-max  space-x-4 gap-y-4 mx-auto py-4  justify-center  ">
      {filterData.map((data) => {
        return (
          <button
            className=" text-lg px-2 py-1 border-2 border-transparent rounded-md text-white bg-black bg-opacity-60  hover:bg-opacity-40 hover:border-white  "
            key={data.id}
            onClick={() => filterhandler(data.title)}
          >
            {data.title}{" "}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
