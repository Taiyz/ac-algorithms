///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\

function cyclicRotation(arr, rotation){
    //Your code here...
    for (var i =0; i < rotation; i++){
      //remove element from end of array
        var arrayElement = arr.pop();
        // place element at beginning of array
        arr.unshift(arrayElement);
}
return arr;
}
var myArray = [1,2,3,4,5,6,7,8,9];

var result = cyclicRotation(myArray, 5);
console.log(result);