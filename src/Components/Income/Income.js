import React from "react";
import incomeImg from "../../images/income.jpg";
const Income = () => {
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-center py-5 font-bold">
        Credit your salary here
      </h2>

      <form
        action=""
        className="bg-white rounded-md shadow m-5 py-6 px-4 md:flex justify-between items-center gap-2"
      >
         
        <div className="space-y-4 w-full">
          <div>
            <label htmlFor="incomeSource" className=" font-bold text-xl">
              Income Source
            </label>
            <input
              type="text"
              className=" block border p-2 rounded w-full outline-none  focus:border-orange-500 "
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
              className=" block border p-2 rounded w-full outline-none focus:border-orange-500"
              placeholder="amount"
              name="incomeSalary"
            />
          </div>

          <button className="primary-button w-full"> Submit</button>
        </div>

        <img src={incomeImg} alt="" className=" w-full md:w-1/2" />
      </form>
    </div>
  );
};

export default Income;
