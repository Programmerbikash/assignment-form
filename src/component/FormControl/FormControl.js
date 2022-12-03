import React from "react";
import { useForm } from "react-hook-form";

const FormControl = ({ formInfo }) => {
    const { name, phone } = formInfo;
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const number = data.number;
    const exampleRequired = data.exampleRequired;
    console.log(number, exampleRequired);
  };

  console.log(watch("number"));

  return (
    <div className="w-1/2 mx-auto my-20">
      <h2>Form</h2>
      <div className="flex justify-center items-center p-7">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            className="input input-ghost w-full input-bordered mt-4"
            type="text"
            defaultValue={phone}
            {...register("number")}
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}
          <input className="btn btn-primary w-full mt-4" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default FormControl;
