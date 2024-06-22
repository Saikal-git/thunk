import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Btc = () => {
  const dispatch = useDispatch();
  const { btc } = useSelector((s) => s);
  const getBtc = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://api.coindesk.com/v1/bpi/currentprice.json`
      );
      const { data } = res;
      console.log(data, "data");
      dispatch({ type: "GET_BTC", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getBtc());
  }, []);

  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className=" w-[700px] h-[400px] bg-yellow-600 rounded-[20px] p-[30px] flex items-center text-center justify-start flex-col mx-auto">
          <h1 className="text-4xl font-bold mb-[20px]">{btc.chartName}</h1>
          <h1 className="text-[18px]">{btc.disclaimer}</h1>
          <h1 className="text-xl font-semibold my-[15px]">
            {btc.time?.updated}
          </h1>

          <div className="flex items-center justify-between gap-[80px]">
            <h1 className="text-red-900 font-bold text-[20px] mt-[20px]">
              {btc.bpi?.EUR.code} {btc.bpi?.EUR.rate_float}{" "}
              {btc.bpi?.EUR.symbol}
            </h1>
            <h1 className="text-red-900 font-bold text-[20px] mt-[20px]">
              {btc.bpi?.USD.code} {btc.bpi?.USD.rate_float}{" "}
              {btc.bpi?.USD.symbol}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Btc;
