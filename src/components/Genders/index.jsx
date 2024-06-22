import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Genders = () => {
  const [genderData, setGenderData] = useState("vadim");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { user } = useSelector((s) => s);
  const dispatch = useDispatch();

  const gender = () => {
    return async (dispatch) => {
      const res = await axios(`https://api.genderize.io/?name=${genderData}`);
      const { data } = res;
      setGenderData(data);
      dispatch({ type: "GET_USER", payload: data });
    };
  };

  useEffect(() => {
    dispatch(gender());
  }, []);

  return (
    // <div>
    //   <h1>Определение пола по имени</h1>
    //   <input
    //     type="text"
    //     value={genderData}
    //     onChange={(e) => setGenderData(e.target.value)}
    //     onKeyDown={(e) => {
    //       if (e.key === "Enter") {
    //         dispatch(gender(genderData));
    //       }
    //     }}
    //     placeholder="Введите имя"
    //     className="border-2 border-red-300"
    //   />
    //   {loading ? (
    //     <p>Загрузка...</p>
    //   ) : error ? (
    //     <p>Ошибка</p>
    //   ) : genderData ? (
    //     <div>
    //       <p>Имя: {user.name}</p>
    //       <p>Пол: {user.gender}</p>
    //       {/* <p>Вероятность: {genderData.probability}</p>
    //       <p>Количество: {genderData.count}</p> */}
    //     </div>
    //   ) : null}
    // </div>
    <div className="">
      <input
        type="text"
        value={genderData}
        onChange={(e) => setGenderData(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(gender(genderData));
          }
        }}
        placeholder="Введите имя"
        className="border-2 border-red-300"
      />
      <p>Имя: {genderData.name}</p>
      <p>Пол: {genderData.gender}</p>
      <p>Вероятность: {genderData.probability}</p>
      <p>Количество: {genderData.count}</p>
    </div>
  );
};

export default Genders;
