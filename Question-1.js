{/* <aside>
💡 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

</aside> */}

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