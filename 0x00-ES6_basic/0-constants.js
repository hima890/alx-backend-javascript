#!/usr/bin/node
// 0-constants.js

// Use 'const' for taskFirst as the value does not change
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// The getLast function stays the same
export function getLast() {
  return ' is okay';
}

// Use 'let' for taskNext as the value of combination changes
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

