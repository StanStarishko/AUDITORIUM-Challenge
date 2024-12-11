"use strict";
function processHeightArray(height) {
    // Step 1: Remove all values that are not integers
    height = height.filter(item => Number.isInteger(item));
    // Step 2: Remove values greater than 104 and less than 0
    height = height.filter(item => item >= 0 && item <= 104);
    // Step 3: Trim the array if it has more than 105 elements
    if (height.length > 105) {
        height = height.slice(0, 105);
    }
    // Step 4: Final check - if the length of the array is less than 2
    if (height.length < 2) {
        return undefined; // Return "undefined" for ease of automatic test writing
    }
    return height;
}
function maxArea(crcHeight) {
    let height = processHeightArray(crcHeight);
    if (height == undefined) {
        return undefined;
    }
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        // Calculate the area
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;
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
let testHeight = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(testHeight)); // Output: 49
testHeight = [1, 1];
console.log(maxArea(testHeight)); // Output: 1
testHeight = [-1, -1];
console.log(maxArea(testHeight)); // Output: undefined
testHeight = [1, 8, 6, 2, 5, 4, 8, 3, 7, 'text', null, -1, 2.5, {}];
console.log(maxArea(testHeight)); // Output: 49 (after processing the valid elements)
