import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userPhoto from "../../assets/img/man-user-color-icon.webp";

const Home = () => {
  const { users } = useSelector((s) => s);
  console.log(users, "user");
  const dispatch = useDispatch();

  const getUser = () => {
    return async (dispatch) => {
      const res = await axios(`https://jsonplaceholder.typicode.com/users`);
      const { data } = res;
      dispatch({ type: "GET_USER", payload: data });
    };
  };

  

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex items-center flex-wrap gap-[40px]">
          {users.map((el) => (
            <div className="w-[350px] h-[570px] bg-black rounded-[20px] flex items-center flex-col p-[15px] gap-3">
              <img src={userPhoto} alt="" width={250} />
              <h1 className="text-white text-[25px] font-bold my-[10px]">
                {el.name}
              </h1>
              <h1 className="text-white text-[18px] px-[80px] border-none border-b-2 border-white">
                {el.username}
              </h1>
              <h1 className="text-white border-b-2 px-[80px] border-white">
                {el.company.name}
              </h1>
              <h1 className="text-white border-b-2 px-[80px] border-white">
                {el.address.city}
              </h1>
              <a className="text-white border-b-2 px-[80px] border-white">
                {el.email}
              </a>
              <h1 className="text-white border-b-2 px-[60px] border-white">
                {el.phone}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
