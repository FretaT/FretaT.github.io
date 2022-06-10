let findEvenOdd = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 4 == 0 && (nums[i] % 2 == 0 || nums[i] % 2 == 1)) {
      arr.push(nums[i]);
    }
  }

  return arr;
};

let sum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 4 == 0) {
      sum += nums[i];
    }
  }

  return sum;
};

let findUniqueNumbers = (nums) => {
  let uniqueNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    let isExist = false;
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) isExist = true;
    }
    if (!isExist) uniqueNumbers.push(nums[i]);
  }

  return uniqueNumbers;
};

let printTypeNumbers = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(typeof nums[i]);
  }

  return arr;
};

let destructeArray = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    combString = (typeof nums[i]).toString() + i;
    obj[combString] = nums[i];
  }

  return obj;
};

let findFirstOddIndex = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) return i;
  }

  return -1;
};

let convertArrayToString = (nums) => {
  let strText = "";

  for (let i = 0; i < nums.length; i++) {
    strText += nums[i];
  }

  return strText;
};

let convertStringToArray = (str) => {
  let arr = [...str];

  return arr;
};

module.exports = {
  findEvenOdd,
  sum,
  findUniqueNumbers,
  printTypeNumbers,
  destructeArray,
  findFirstOddIndex,
  convertArrayToString,
  convertStringToArray,
};
