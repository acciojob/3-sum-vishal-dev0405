function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    let closestNums;
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let currentSum = arr[i] + arr[j] + arr[k];
            if (currentSum === target) {
                return currentSum;
            } else if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
                closestNums = [arr[i], arr[j], arr[k]];
            }
            if (currentSum > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;
