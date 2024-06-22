import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
  //https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru
  const dispatch = useDispatch();
  const { weather } = useSelector((s) => s);
  const [inputValue, setInputValue] = useState("");
  const [inputFalse, setInputFalse] = useState(false);

  const getWeather = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      const { data } = res;
      console.log(data);
      dispatch({ type: "GET_WEATHER", payload: data });
      setInputValue("");
    };
  };

  useEffect(() => {
    if (inputValue.trim() === "") {
      console.log(404);
    } else {
      dispatch(getWeather());
    }
  }, []);

  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className="flex gap-7 items-center justify-center  mx-auto">
          <div className="relative z-0 w-[40%] mb-5 group">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(getWeather());
                  setInputFalse(true);
                }
              }}
              type="text"
              name="floating_password"
              id="floating_password"
              className="block py-4 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <button
            onClick={() => {
              dispatch(getWeather());
              setInputFalse(true);
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  from-purple-600 to-blue-500 group-from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              search
            </span>
          </button>
        </div>
        {inputFalse ? (
          <div className="w-[50%] h-[400px] bg-white rounded-[20px] mx-auto my-[30px] p-[30px] text-3xl flex items-start justify-start flex-col gap-5">
            <h1>
              {weather?.name} / {weather.sys?.country}
            </h1>
            <h1> температура : {weather.main?.temp}</h1>
            <h1> скорость ветра: {weather.wind?.speed}</h1>
            <h1>{weather.weather?.map((el) => el.description)}</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
