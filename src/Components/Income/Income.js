import React, { useState } from "react";
import incomeImg from "../../images/income.jpg";
const Income = () => {
  const [incomeData, setIncomeData] = useState([]);

  const submitIncomeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const incomeSource = form.incomeSource.value;
    const incomeSalary = form.incomeSalary.value;

    const newIncome = {
      salary: incomeSalary,
      source: incomeSource,
    };
    setIncomeData([...incomeData, newIncome]);
    form.reset();
  };

  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-center py-5 font-bold">
        Credit your salary here
      </h2>

      <form
        onSubmit={submitIncomeHandler}
        action=""
        className="bg-white rounded-md my-5 py-6 px-4 md:flex justify-between items-center gap-2"
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
              required
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
              required
            />
          </div>

          <button className="primary-button w-full"> Add income</button>
        </div>

        <img src={incomeImg} alt="" className=" w-full md:w-1/2" />
      </form>

      <div
        className="bg-white container rounded-md py-6 px-5
      "
      >
        <h2 className="text-3xl pb-5 text-center font-bold">
          Your income statement
        </h2>

        {incomeData.length === 0 ? (
          <p className="text-2xl pb-5 text-center">
            No credits or transactions recorded yet.
          </p>
        ) : (
          <div>
            {incomeData.map((income, idx) => (
              <div className="flex gap-4 justify-center items-center" key={idx}>
                <p className="font-bold text-xl">{income.source}:</p>
                <p className="font-bold text-xl">${income.salary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Income;
