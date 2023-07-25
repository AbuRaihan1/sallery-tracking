import React from "react";

const Income = () => {
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-center py-5 font-bold">
        Credit your salary here
      </h2>

      <form action="" className="shadow bg-gray-50 m-5 py-6 px-4">
       <div className="space-y-4">
       <div>
          <label htmlFor="incomeSource" className=" font-bold text-xl">
            Income Source
          </label>
          <input
            type="text"
            className=" block border p-2 rounded w-1/2 outline-none  focus:border-orange-500"
            placeholder="Description"
            name="incomeSource"
          />
        </div>

        <div>
          <label htmlFor="incomeSalary" className=" font-bold text-xl">
            Income Salary
          </label>
          <input
            type="text "
            className=" block border p-2 rounded w-1/2 outline-none focus:border-orange-500"
            placeholder="amount"
            name="incomeSalary"
          />
        </div>

        <button className="primary-button"> Submit</button>
       </div>
      </form>
    </div>
  );
};

export default Income;
