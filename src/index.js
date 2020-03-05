function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    let bracketLeft = '(';
    let bracketRight = ')';
    let count = 0;
	  	    
    for (let j = 0; j < expr.length; j++) {
	if (bracketLeft === expr[j]) count++;
        if (bracketRight === expr[j]) count--;
	if (count < 0) throw("ExpressionError: Brackets must be paired");
	}
    if (count !== 0) throw("ExpressionError: Brackets must be paired");
	  
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
	    if (stackOperators[stackOperators.length - 1] === '/' && y === 0) throw("TypeError: Division by zero.");
            stackNumbers.push(operators[stackOperators[stackOperators.length - 1]](x, y));
	}
	return stackNumbers[0];
}

module.exports = {
    expressionCalculator
}
