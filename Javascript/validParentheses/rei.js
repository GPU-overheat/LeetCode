/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  const stack = [];
  const pars = "() {} []";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
	
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];
	// console.log(`open: ${open} at iteration: ${i}`);
	// console.log(`closed: ${closed} at iteration: ${i}`);
	// console.log(`################################`);
	
    let potPars = open + closed;
    if (pars.includes(potPars)) {
		// console.log(`im here at iteration ${i}`);
		
		stack.pop();
		stack.pop();
    }
	i++;
  }
  return stack.length === 0;
};

