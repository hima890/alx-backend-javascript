#!/usr/bin/node
// 7-getBudgetObject.js

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

