function flatternArray(arr){
    
    for(let i=0;i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flatternArray(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
const result = [];
const arr = [1,2,[3,4,[5]]];

console.log(flatternArray(arr, result));