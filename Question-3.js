{/* <aside>
💡  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
**Example 1:**
Input: nums = [1,3,5,6], target = 5
Output: 2
</aside> */}
const returnIndex = (nums,target) => {
    for(i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
        if(nums[i] > target){
            return i
        }
        if(nums[i] === nums[nums.length-1]){
            return i+1
        }
    }
}
// console.log(returnIndex([1,3,5,6,8],2))