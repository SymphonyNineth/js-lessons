
function hasSum(arr, number) {
  for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
      if(arr[i]+arr[j] === number){
        return true;
      }
    }
  }
  return false;
}

O(n^2)

console.log(hasSum([1,2,3,4,5], 10))
