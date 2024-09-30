#!/usr/bin/node
// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const employees = [];

  // Gather all employees from all departments
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}

