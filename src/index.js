function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
};  
    
    expr = expr.replace(/\s/g, '');
	expr = expr.replace(/\+/g, ' + ');
	expr = expr.replace(/\-/g, ' - ');
	expr = expr.replace(/\*/g, ' * ');
	expr = expr.replace(/\//g, ' / ');
	expr = expr.replace(/\(/g, '( ');
	expr = expr.replace(/\)/g, ' )');
    
	let stackNumbers = [];
	let stackOperators = [];	
    const tokenArr = expr.split(' ');
	
    for (let i = 0; i < tokenArr.length; i++) {
		// если число - положить в стек чисел		
	    // если оператор - положить в стек операторов
		if (isNaN(+tokenArr[i])) {
			stackOperators.push(tokenArr[i])
		}else stackNumbers.push(+tokenArr[i]);
	}
		
	while (stackNumbers.length > 1) {
		let [y, x] = [stackNumbers.pop(), stackNumbers.pop()];
            stackNumbers.push(operators[stackOperators[stackOperators.length - 1]](x, y));
	}
	return stackNumbers[0];
}

module.exports = {
    expressionCalculator
}
