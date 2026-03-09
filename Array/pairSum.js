function pairSum(arr, target){

    let result = [];
    for(let i=0; i<arr.length;i++){
        for(let j=1; j<arr.length;j++){
            if(target === arr[i]+arr[j]){
                result.push(i,j);
                return result;
            }
        }
    }
    return result;
}

function kendensAlgo(arr, target){
    
    let i=0;
    let j=arr.length-1;
    let result = [];

    while(i < j){
        let sum = arr[i] + arr[j];

        if(sum > target){
            j--;
        }else if(sum < target){
            i++;
        }else{
            result.push(i,j);
            return result;
        }
    }
    return result;
}

const arr = [2,7,11,15];
const target = 13;
console.log(pairSum(arr, target));
console.log(kendensAlgo(arr, target));