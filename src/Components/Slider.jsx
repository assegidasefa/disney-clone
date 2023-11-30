import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideo.then((res) => {
      console.log(res.data.results);
      const data = res?.data?.results;
      setMovieList(data);
    });
  };
  return (
    <div>
      <FaAngleLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"/>

          <FaAngleRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"/>
      <div className="flex overflow-x-auto w-full py-4 px-16 scrollbar-none">
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
