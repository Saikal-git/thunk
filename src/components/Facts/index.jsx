import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Facts = () => {
  const dispatch = useDispatch();
  const { facts } = useSelector((s) => s);

  const getFact = () => {
    return async (dispatch) => {
      const res = await axios(`https://catfact.ninja/fact`);
      const { data } = res;
      console.log(data, "dat");
      dispatch({ type: "GET_FACT", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getFact());
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="">
          <button
            onClick={() => dispatch(getFact())}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            search
          </button>
          <h1 className="text-white text-[30px]">{facts.fact}</h1>
        </div>
      </div>
    </div>
  );
};

export default Facts;
