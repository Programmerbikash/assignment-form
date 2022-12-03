import React from "react";

const Model = ({ info, setFormInfo }) => {
  const { name, email, id, phone, username, website } = info;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl">Name: {name}</h2>
          <p>User Name: {username}</p>
          <div className="card-actions justify-center">
            <label onClick={() => setFormInfo(info)} htmlFor="form-model" className="btn btn-primary">
              See Detail
            </label>
          </div>
        </div>
          </div>
    </div>
  );
};

export default Model;
