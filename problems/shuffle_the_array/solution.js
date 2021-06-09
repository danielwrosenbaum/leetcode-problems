/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const newArrOne = nums.slice(0, n)
    const newArrTwo = nums.slice(n, n.length)
    const retArr = []
    for (let i =0; i < n; i++) {
        retArr.push(newArrOne[i])
        retArr.push(newArrTwo[i])
    }
    return retArr;
};