class Solution {
  constructor(input) {
    this.input = input;
    this.arrayTemplate = [];
  }

  isBalance() {
    for (let char of this.input) {
      if (char === "(" || char === "{" || char === "[") {
          this.arrayTemplate.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (this.arrayTemplate.length === 0) {
          return false;
        }
        
        this.arrayTemplate.pop();
      }
    }
    return this.arrayTemplate.length === 0;
  }
}

// Contoh penggunaan
const input1 = "{[()]}";
const input2 = "{[(])}";
const input3 = "{(([])[])[]}";
const input4 = "{(([])[])[]]]}";

const Solution1 = new Solution(input1);
console.log(Solution1.isBalance()); // Output: true

const Solution2 = new Solution(input2);
console.log(Solution2.isBalance()); // Output: true

const Solution3 = new Solution(input3);
console.log(Solution3.isBalance()); // Output: true

const Solution4 = new Solution(input4);
console.log(Solution4.isBalance()); // Output: false