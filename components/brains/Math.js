// Import the mathjs library.
const mathjs = require('mathjs');

export function simplifyMathProblem(problem) {
  // Check if the problem is valid.
  if (!problem) {
    return "Invalid problem.";
  }

  // Try to solve the problem using the mathjs library.
  try {
    var simplifiedProblem = mathjs.simplify(problem);
    var steps = mathjs.simplifySteps(problem);
    return {
      simplifiedProblem: simplifiedProblem,
      steps: steps,
      // solvable: true
    };
  } catch (e) {
    // Check if the problem is unsolvable.
    console.log(e)
    if (e.message === "The equation is unsolvable.") {
      return {
        solvable: false
      };
    } else {
      return "Sorry, I cannot solve this at this time.";
    }
  }
}

// Example usage.
var problem = "simplify 3x+x - y^2 * 10";
var result = simplifyMathProblem(problem);
console.log(result);
