{/* <aside>
💡 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside> */}
const fun = (nums)=>{
    let map = new Map()
    for(i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i],i)
    }
    return false
}
console.log(fun([1,2,3,1]))