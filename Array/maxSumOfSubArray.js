function maximumSumOfSubArray(arr){
    let maxSum = -Infinity;
    let currSum = 0;

    for(let i=0;i<arr.length; i++){
        currSum = currSum + arr[i];

        if(currSum > maxSum){
            maxSum = currSum;
        }
        if(arr[i] < 0){
            currSum = 0;
        }
    }
    return maxSum;
}

const arr = [1,2,3,4,5]
console.log(maximumSumOfSubArray(arr));