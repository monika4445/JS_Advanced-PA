'use strict';

function merge(arr1, arr2, arr3, arr4, arr5) {
    
    let result = [];
    let arr = [arr1[0], arr2[0], arr3[0], arr4[0], arr5[0]];
    let maxLength = arr1.length + arr2.length + arr3.length + arr4.length + arr5.length;

    for (let i = 0; i < maxLength; i++) {
        result.push(Math.min(...arr));
        if (Math.min(...arr) === arr[0]) {
	      arr1.shift();
	      arr[0] = arr1[0] || Infinity;
        }
        else if (Math.min(...arr) === arr[1]) {
	       arr2.shift();
	       arr[1] = arr2[0] || Infinity;
        }
        else if (Math.min(...arr) === arr[2]) {
               arr3.shift();
	       arr[2] = arr3[0] || Infinity;
        }
        else if (Math.min(...arr) === arr[3]) {
               arr4.shift(); 
               arr[3] = arr4[0] || Infinity;;
       }
        else if (Math.min(...arr) === arr[4]) {
               arr5.shift();
	       arr[4] = arr5[0] || Infinity;;
        }
    }
    return result;
}

console.log(merge([15,61,77], [7, 11, 60], [19, 31], [3, 5], [113, 228]));


