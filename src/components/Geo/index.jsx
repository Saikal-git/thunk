import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Geo = () => {
  const [block, setBlock] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { geoData, adress } = useSelector((s) => s);
  const getAdress = () => {
    return async (dispatch) => {
      const res = await axios(`https://api.ipify.org/?format=json`);
      const { data } = res;
      console.log(data, "data");
      dispatch({ type: "GET_ADRESS", payload: data.ip });
    };
  };

  const geocData = () => {
    return async (dispatch) => {
      const result = await axios(`https://ipinfo.io/${inputValue}/geo`);
      const { data } = result;
      console.log(data, "geodata");
      dispatch({ type: "GET_ADRESS_DATA", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getAdress());
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="">
          <button
            onClick={() => {
              dispatch(geocData());
              setBlock(true);
            }}
            className=" w-[170px] h-[50px] bg-white rounded-[30px] text-[20px] font-bold"
          >
            get address
          </button>

          <div className="flex items-center ">
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search..."
              className="block py-4 px-0 w-[40%] text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <button
              onClick={() => {
                dispatch({ type: "GET_ADRESS_DATA", payload: inputValue });
                dispatch(geocData());
                setBlock(true);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>

          {block ? (
            <div className="w-[500px] h-[400px] bg-white font-medium text-3xl rounded-[20px] flex items-center justify-center flex-col gap-[20px] my-[40px]">
              <h1>{geoData.city}</h1>
              <h1>{geoData.country}</h1>
              <h1>{geoData.timezone}</h1>
              <a
                href={`https://www.google.com/maps?q=${geoData.loc}`}
                target="_blank"
              >
                {geoData.loc}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Geo;
