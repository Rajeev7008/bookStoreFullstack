import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="">
        <div  className="flex flex-wrap justify-center items-center">
          <div className=" mt-5 bg-gray-600 w-96 px-10 py-3 rounded-lg border">
            <a href="/" className="bg-pink-500 rounded-lg px-3 py-1">Back</a>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              
              <h3 className="font-bold text-lg">Contact</h3>

              <div className="mt-4 space-y-4">
                <label htmlFor="email" className="block">
                  message
                </label>
                <input
                  id="message"
                  type="text"
                  placeholder="enter your message"
                  className="w-80 border rounded-md outline-none py-2 my-2 px-3"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
              </div>
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
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
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
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex mt-4 justify-around">
                <button
                  type="submit"
                  className="outline-none px-3 py-1 rounded-lg bg-pink-500 hover:bg-pink-700 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
