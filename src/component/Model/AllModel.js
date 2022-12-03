import React from "react";

const AllModel = ({ formInfo }) => {
  console.log(formInfo);
  const { name, email, phone, username, website } = formInfo;
  return (
    <>
      <input type="checkbox" id="form-model" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-center">
          <label
            htmlFor="form-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">{name}</h3>
          <form action="" className="grid grid-rows-1 gap-4 my-4">
            <input
              type="text"
              placeholder={username}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder={email}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder={phone}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder={website}
              className="input input-bordered w-full"
            />
            <div className="modal-action justify-center">
              <button className="btn btn-primary w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AllModel;
