
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    
    const result = []; 
    matrix.forEach((array, index) => {
        index % 2 === 0 ? result.push(...array) : result.push(...array.reverse());
    });
    return result;
}
