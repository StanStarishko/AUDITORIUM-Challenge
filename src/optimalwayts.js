// Function to process the height array
function processHeightArrayTS(heightTS) {
    // Step 1: Remove all values that are not integers
    var height = heightTS.filter(function (item) { return Number.isInteger(item); });
    // Step 2: Remove values greater than 104 and less than 0
    height = height.filter(function (item) { return item >= 0 && item <= 104; });
    // Step 3: Trim the array if it has more than 105 elements
    if (height.length > 105) {
        height = height.slice(0, 105);
    }
    // Step 4: Final check - if the length of the array is less than 2
    if (height.length < 2) {
        return undefined; // Return "undefined" for easier automatic testing
    }
    return height;
}
// Function to calculate the maximum area
function maxAreaTS(crcHeightTS) {
    var height = processHeightArrayTS(crcHeightTS);
    if (height === undefined) {
        return undefined;
    }
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;
    while (left < right) {
        // Calculate the area
        var width = right - left;
        var currentHeight = Math.min(height[left], height[right]);
        var area = width * currentHeight;
        // Renovating the maximum area
        maxArea = Math.max(maxArea, area);
        // Shifting pointers
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
var testHeightTS;
testHeightTS = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxAreaTS(testHeightTS)); // Output: 49
testHeightTS = [1, 1];
console.log(maxAreaTS(testHeightTS)); // Output: 1
testHeightTS = [-1, -1];
console.log(maxAreaTS(testHeightTS)); // Output: undefined
testHeightTS = [1, 8, 6, 2, 5, 4, 8, 3, 7, 'text', null, -1, 2.5, {}];
console.log(maxAreaTS(testHeightTS)); // Output: 49 (after processing the valid elements)
