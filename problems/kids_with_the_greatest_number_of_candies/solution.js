/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies);
    const newArr = [];
    for (let i =0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandy) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    return newArr;
};