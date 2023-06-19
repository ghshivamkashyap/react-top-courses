import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let cources = props.cources;
  let category = props.category;

  const getallcources = () => {
    if (category === "All") {
      let allcources = [];
      if (cources) {
        Object.values(cources).forEach((courcecatagory) => {
          courcecatagory.forEach((cource) => {
            allcources.push(cource);
          });
        });
      }
      return allcources;
    } else {
      // spacefic data hi pass karo bhai
      return cources[category];
    }
  };

  const allcourcesArray = getallcources();
  console.log(allcourcesArray);
  const [likedcources, setliked] = useState([]);

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4 max-h-full ">
      {allcourcesArray.length === 0 ? (
        <h1>No data found...</h1>
      ) : (
        getallcources().map((cource) => {
          return (
            <Card
              key={cource.id}
              likedcources={likedcources}
              setliked={setliked}
              cource={cource}
            />
          );
        })
      )}
    </div>
  );
}

export default Cards;
