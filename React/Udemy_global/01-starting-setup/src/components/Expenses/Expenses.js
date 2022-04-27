import React, { useState } from "react";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.items;
  // console.log(items[0].date.getFullYear());

  const [filteredYear, setFilteredYear] = useState("2022");

  // const Y2021 = items.filter((item) => item.date.getFullYear() === 2021);
  // const Y2020 = items.filter((item) => item.date.getFullYear() === 2020);

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 각 년도만 차트에 뜨게 하기 위해 filteredExpenses 전달 */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
