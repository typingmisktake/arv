import { useState } from "react";
import { useForm } from "react-hook-form";

import Display from "./components/Display";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [profiles, setProfiles] = useState([]);

  const onSubmit = (data, e) => {
    setProfiles((prev) => [...prev, data]);
    e.target.reset();
  };

  return (
    <div className="flex items-center min-h-screen bg-slate-800">
      <div className="container flex justify-center">
        <div className="p-5 space-y-8 shadow-2xl bg-slate-700 md:w-2/3 lg:w-1/2">
          <div className="">
            <h1 className="mb-5 text-2xl text-center text-white">
              Profile Form
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <input
                  type="number"
                  className="w-full px-4 py-2"
                  placeholder="Id"
                  {...register("id", { required: "Id is required." })}
                />
                {errors.id && (
                  <span className=" text-rose-500">{errors.id.message}</span>
                )}
                <input
                  type="text"
                  className="w-full px-4 py-2"
                  placeholder="Your name"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long.",
                    },
                  })}
                />
                {errors.name && (
                  <span className=" text-rose-500">{errors.name.message}</span>
                )}
                <input
                  type="text"
                  className="w-full px-4 py-2"
                  placeholder="Your address"
                  {...register("address", {
                    required: "Address is required.",
                  })}
                />
                {errors.address && (
                  <span className=" text-rose-500">
                    {errors.address.message}
                  </span>
                )}
                <input
                  type="submit"
                  value="Submit"
                  className="w-full px-4 py-2 text-white cursor-pointer bg-rose-600 hover:shadow"
                />
              </div>
            </form>
          </div>
          <hr className="border-slate-800" />
          <div className="text-white">
            <Display profiles={profiles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
