# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon bug related to the MongoDB `$inc` operator when attempting to decrement a counter that is already at zero.  Incorrect usage can result in negative counter values.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected implementation.

## Bug Description

The `$inc` operator is commonly used to increment or decrement numeric fields in MongoDB documents.  However, if you attempt to decrement a counter that is already zero, the resulting value will be negative, which might not be the desired behavior.  The solution below ensures the counter remains at zero or above.

## Solution

The provided solution employs a conditional update that checks the current value before performing the decrement. This prevents the counter from falling below zero.