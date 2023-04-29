  // load math.js (using node.js)
const math = require('mathjs');
const parser = math.parser()

export function mathParse(input) {
  let mathArr = input.split(',')
  let res = ""

  try {
  if (mathArr[0].toLowerCase().includes('differentiate')) {
    return {math: true, ans: math.derivative(mathArr[0].slice(10), mathArr[1]).toString()}
  } 
   if (mathArr[0].toLowerCase().includes('simplify')) {
     console.log("CUT", mathArr[0].slice(8))
    return {math: true, ans: math.simplify(mathArr[0].slice(8)).toString()}
  } 
  for (let i = 0; i < mathArr.length; i++) {
    res += parser.evaluate(mathArr[i]) + "\n"
  }
  return {math: true, ans: res}
  }
  catch (error) {
    console.log("an error occurred", error.message)
    return {math: false, ans:'your input ' + input  + ' is incorrect. Reformat your input'}
  }
}
