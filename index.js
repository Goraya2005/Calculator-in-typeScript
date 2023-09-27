import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'enter first number',
    },
    {
        type: 'number',
        name: 'num2',
        message: 'enter second number',
    },
    {
        type: 'list',
        name: 'operator',
        message: 'select the operator you want to perform',
        choices: ['add', 'subtract', 'multiply', 'division', 'modulus', 'exponent', 'Square Root', 'Logarithm', 'Sine', 'Cosine', 'Tangent', 'Absolute Value', 'Power of 10'],
    }
]);
let result;
switch (answer.operator) {
    case 'add':
        result = answer.num1 + answer.num2;
        console.log('The answer of addition of your given numbers is', result);
        break;
    case 'subtract':
        result = answer.num1 - answer.num2;
        console.log('The answer of Subtraction of your given numbers is', result);
        break;
    case 'multiply':
        result = answer.num1 * answer.num2;
        console.log('The answer of multiplication of your given numbers is', result);
        break;
    case 'division':
        result = answer.num1 / answer.num2;
        console.log('The answer of division of your given numbers is', result);
        break;
    case 'modulus':
        result = answer.num1 % answer.num2;
        console.log('The answer of modulus of your given numbers is', result);
        break;
    case 'exponent':
        result = Math.pow(answer.num1, answer.num2);
        console.log('The answer of division of your given numbers is', result);
        break;
    case 'Square Root':
        result = Math.sqrt(answer.num1);
        console.log(`The square root of ${answer.num1} is ${result}`);
        break;
    case 'Logarithm':
        result = Math.log(answer.num1);
        console.log(`The logarithm of ${answer.num1} is ${result}`);
        break;
    case 'Sine':
        result = Math.sin(answer.num1);
        console.log(`The sine of ${answer.num1} is ${result}`);
        break;
    case 'Cosine':
        result = Math.cos(answer.num1);
        console.log(`The cosine of ${answer.num1} is ${result}`);
        break;
    case 'Tangent':
        result = Math.tan(answer.num1);
        console.log(`The tangent of ${answer.num1} is ${result}`);
        break;
    case 'Absolute Value':
        result = Math.abs(answer.num1);
        console.log(`The absolute value of ${answer.num1} is ${result}`);
        break;
    case 'Power of 10':
        result = Math.pow(10, answer.num1);
        console.log(`10 raised to the power ${answer.num1} is ${result}`);
        break;
}
