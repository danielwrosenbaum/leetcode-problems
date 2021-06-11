/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const newArr = [];
    // newArr.length = accounts.length
    for (let i =0; i < accounts.length; i++) {
        let count = 0;
        let accountsI = accounts[i]
        for (let x =0; x < accountsI.length; x++) {
            count += accountsI[x]
        }
        newArr.push(count)
    }
    return Math.max(...newArr)
};