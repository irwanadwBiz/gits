const sortAlphabetsStr = (str) => {
  return str.split("").sort().join("");
};
const compareArrays = (array1, array2, template) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      template.push(false); // If any values at corresponding indices are different, return false
    } else {
      template.push(true);
    }
  }
  return template; // All values at corresponding indices are the same, return true
};

const checkerQueryWeightedString = (str, queries) => {
  const sortedStr = sortAlphabetsStr(str);
  let iteration = 0; 
  let iterationStr = ""; 
  const weightedOfString = []; 
  const charArr = [];
  let stringIterationWeight = 0; 
  let index = 0; 
  for (const char of sortedStr) {
    iteration++;
    charArr.push(char);
    if (char !== iterationStr) {
      stringIterationWeight = char.charCodeAt() - 96;
      weightedOfString.push(stringIterationWeight);
      iterationStr = char;
      index = weightedOfString.length;
    } else {
      stringIterationWeight += char.charCodeAt() - 96;
      weightedOfString[index - 1] = stringIterationWeight;
    }
  }
  const result = compareArrays(queries, weightedOfString, []);
  console.log(result);
  return result;
};

checkerQueryWeightedString("abbcccd", [1, 3, 9, 8]);
checkerQueryWeightedString("aabcdd", [2, 2, 3, 8]);
