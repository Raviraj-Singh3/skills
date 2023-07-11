const twoSum = function(nums, total){
    let map = new Map();
    for(i=0; i<nums.length; i++){
        let x = total - nums[i];
        if(map.has(x)){
           return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
}

// brute force 

// const twoSum = function(nums, target) {
//     let result = [];
//     for(i=0; i<nums.length; i++){
//         let cur = nums[i];
//         for(j = i+1; j<nums.length; j++){
//             let next = nums[j];
//             if(cur + next == target){
//                 result = [i,j]
//             }
//         }
//     }
//     return result
// };