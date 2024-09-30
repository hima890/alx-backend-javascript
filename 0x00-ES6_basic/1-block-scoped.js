#!/usr/bin/node
// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Use let so that these variables are only scoped to the if block
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

