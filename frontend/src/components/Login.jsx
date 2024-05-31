import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4 space-y-4">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="enter your email"
                  className="w-80 border rounded-md outline-none py-2 my-2 px-3"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">This field is required</span>
                )}
              </div>

              <div className="mt-4 space-y-4">
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="enter your password"
                  className="w-80 border rounded-md outline-none py-2 my-2 px-3"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-400 text-sm">This field is required</span>
                )}
              </div>

              <div className="flex mt-4 justify-around">
                <button
                  type="submit"
                  className="outline-none px-3 py-1 bg-pink-500 hover:bg-pink-700 text-white"
                >
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <NavLink
                    to="/signup"
                    className="underline text-blue-700 cursor-pointer"
                  >
                    Signup
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
