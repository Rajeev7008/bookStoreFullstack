import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-slate-500 text-dark">
      
        <div  className="flex h-screen items-center justify-center">
          <div className="modal-box bg-gray-600 text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 shadow-lg"
              >
                ✕
              </Link>

              <div className="">
                <h3 className="font-bold text-lg">Signup</h3>

                <div className="mt-4 space-y-4 ">
                  <label htmlFor="fullname">Name</label>
                  <br />
                  <input
                    
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-80 bg-gray-600 border rounded-md outline-none py-2 my-2 px-3"
                    {...register("fullname", {
                      required: "Fullname is required",
                    })}
                  />
                  {errors.fullname && (
                    <span className="text-red-400 text-sm">
                      {errors.fullname.message}
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 bg-gray-600 border rounded-md outline-none py-2 my-2 px-3"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                   
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 bg-gray-600 border rounded-md outline-none py-2 my-2 px-3"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-400 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="flex mt-4 justify-around">
                  <button
                    type="submit"
                    className="bg-pink-500 py-1 px-3 border rounded-md hover:bg-pink-700 duration-200"
                  >
                    Register
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="text-blue-700 cursor-pointer"
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </form>
          </div>
          </div>
         
      </div>
    </>
  );
}

export default Signup;
