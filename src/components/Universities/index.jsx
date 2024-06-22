import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Universities = () => {
  //http://universities.hipolabs.com/search?country=Kazakhstan
  const { univer } = useSelector((s) => s);
  const dispatch = useDispatch();

  const getUniversities = () => {
    return async (dispatch) => {
      const res = await axios(
        //
        `http://universities.hipolabs.com/search?country=Kazakhstan`
      );
      const { data } = res;
      console.log(data, "data");
      dispatch({ type: "GET_UNIVER", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  return (
    <div className="my-[50px]">
      <div className="container">
        <div className="flex items-start justify-start flex-wrap gap-[30px]">
          {univer?.map((el) => (
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.country}
              </h5>
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                {el.name} / <i>{el.domains}</i>
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Universities;
