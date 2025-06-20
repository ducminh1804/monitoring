import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../commons/Loading/Loading";
import "./style.css";
import Spinner from "../../commons/Spinner";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice";
import SpinnerV2 from "../../commons/SpinnerV2";
import Spin from "../../commons/Spin/Spin";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      dispatch(login());

      navigate("/reports");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-img">
      <div className="">
        <div className="bg-gray-50/95 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Hệ thống kiểm soát van điều phối nước
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Tên đăng nhập
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nhập tên đăng nhập"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <Spin /> */}
              {loading && <Loading />}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Đăng nhập
              </button>

              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Quên mật khẩu?
              </a>
            </div>
          </form>
        </div>
        <div className="text-center text-gray-500 text-xs">
          <br />© 2023 FD SOFTWARE CO, LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
