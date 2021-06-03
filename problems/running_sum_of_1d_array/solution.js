/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const newArr = [];
    let count = 0;
    for (let i =0; i < nums.length; i++) {
        if (i === 0) {
            newArr.push(nums[i])
            count += nums[i]
        } else {
            count += nums[i]
            newArr.push(count)
        }
    }
    return newArr;
};