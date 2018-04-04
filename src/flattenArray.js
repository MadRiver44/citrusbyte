'use strict'
/*
Implement a function that flattens nested arrays
flattenArrays([1, [2], [3, [[4]]]]);
result => [1,2,3,4]

@param {array} function takes an array as only parameter
@return {array} function returns an array

Time O(N)
Additional Space O(N)
*/

export function flattenArray(arr){
  let result = [];
    arr.forEach(function(element) {
      if(!Array.isArray(element)) {
        result.push(element);
      } else {
        result = result.concat(flattenArray(element));
      }
    });
    return result;
  }

