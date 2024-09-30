#!/usr/bin/node
// 101-iterateThroughObject.js
export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Use the iterator to collect all employee names
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with ' | ' separator and return the string
  return employees.join(' | ');
}

