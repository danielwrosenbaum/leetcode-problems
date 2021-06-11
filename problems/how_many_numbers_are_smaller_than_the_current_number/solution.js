/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    const newArr = []
    for (x =0; x < nums.length; x++) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[x] > nums[i]) {
                count++;
            } 
        }
        newArr.push(count)
    }
   return newArr
};