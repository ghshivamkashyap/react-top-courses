import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import Filter from "./Filter";
import { toast } from "react-toastify";
// import ""

function Card(props) {
  let cource = props.cource;
  let likedcources = props.likedcources;
  let setliked = props.setliked;
  function clickhandler() {
    // logic..?
    // console.log("clickhandler");
    if (likedcources.includes(cource.id)) {
      // phle se liked hai
      
      setliked((prev) => prev.filter((cid) => (cid !== cource.id)));
      toast.warning("Like removed..");
    } 
    
    else {
      // phle se liked nahi hai ye cource
      if (likedcources.length === 0) {
        setliked([cource.id]);
      } else {
        // phle se kuch data hai liked
        setliked((prev) => [...prev, cource.id]);
      }
      toast.success("Liked..");
    }
   
  }

  return (
    <div className=" w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 ">
      <div className=" relative ">
        <img src={cource.image.url} />

        <div className=" w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center absolute right-2 hover:text-orange-400 top-36 ">
          <button onClick={clickhandler}>
            {/* <FcLike fontSize={"1.75rem"} /> */}
            {
              likedcources.includes(cource.id) ? <FcLike fontSize={"1.75rem"} /> : <FcLikePlaceholder fontSize={"1.75rem"} />
            }
          </button>
        </div>
      </div>
      <div className=" p-4 ">
        <p className=" text-white font-semibold text-lg leading-6 ">
          {cource.title}
        </p>
        <p className=" text-white pt-4 ">{cource.description.substr(0,120)}...</p>
      </div>
    </div>
  );
}

export default Card;

{
  /* <i class="fa-solid fa-heart"></i> */
}
