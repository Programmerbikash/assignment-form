import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ info }) => {
    const { name } = info;
    console.log(info)
    const {
        register,
        formState: { errors },
    } = useForm();
    
    
    return (
        <div>
        <input className="input input-ghost w-full input-bordered mt-4" type="text" defaultValue={name} {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        </div>
    );
};

export default Form;