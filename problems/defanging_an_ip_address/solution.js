/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var newAdd = address.replace(/\./g, '[.]')
    return newAdd;
};