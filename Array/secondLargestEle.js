function secondLargestEle(arr){

    let max = -Infinity;
    let secondLarge = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            secondLarge = max;
            max = arr[i];
        }else if(arr[i] !== max && secondLarge < arr[i]){
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}

const arr = [1,2,5,7,3,9,3,8,6];

console.log("Second largest Element",secondLargestEle(arr));