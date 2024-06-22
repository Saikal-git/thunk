import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import newPhoto from "../../assets/img/news.jpg";
import { useNavigate } from "react-router-dom";

const News = ({ setValueInput, valueInput }) => {
  const { news } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [mouse, setMouse] = useState(false);

  const getNews = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://newsapi.org/v2/everything?q=${inputValue}&from=2024-05-19&sortBy=publishedAt&apiKey=aec160a4a838430f963252fc2d2dbe69`
      );
      const { data } = res;
      console.log(data.articles, "data");
      dispatch({ type: "NEWS", payload: data.articles });
    };
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="relative mb-5 group">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(getNews());
              }
            }}
            onInput={(e) => setValueInput(e.target.value)}
            type="text"
            placeholder="News..."
            className="block py-4 px-0 w-[50%] text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <div className=" mt-[30px] flex items-start justify-center   flex-wrap gap-[30px] ">
            {news
              ?.filter((el) => el.title.toLowerCase().includes(valueInput))
              ?.map((el) => (
                <div className="w-[350px] h-[550px] bg-white flex items-start justify-start flex-col gap-[20px]">
                  {el.urlToImage === null || undefined ? (
                    <img src={newPhoto} alt="" />
                  ) : (
                    <img src={el.urlToImage} alt="" />
                  )}
                  <div className="p-[20px]  flex items-start justify-start flex-col gap-[20px]">
                    <h1 className="">{el.title}</h1>
                    <p
                      onMouseOver={() => setMouse(true)}
                      onMouseOut={() => setMouse(false)}
                    >
                      {el.description?.slice(0, 50) + "..."}
                    </p>
                  </div>
                  <div
                    className="w-[300px] p-[20px] m-[10px] bg-gray-300 rounded-[20px]"
                    style={{
                      transition: "1s",
                      transform: mouse
                        ? "translateY(-100px)"
                        : "translateY(0px)",
                      opacity: mouse ? "1" : "0",
                    }}
                    onMouseEnter={() => setMouse(true)}
                    onMouseLeave={() => setMouse(false)}
                  >
                    <p>
                      <i>"{el.description}"</i>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
