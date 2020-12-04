const Stack = require('../stacks');

const bracketsArray = ['(', ')', '[', ']', '{', '}']
const matchBrackets = {
    '(':')',
    '[':']',
    '{':'}',
    ')':'(',
    ']':'[',
    '}':'{'
}

const brackets = (item) => {

    return item
    .split('')
    .filter(item => bracketsArray.includes(item)) 
}


const looper = (array) => {
    const bracketStack = new Stack();
    let result = true

    array
    .map(bracket => {
        const peek = bracketStack.peek();
        if (!peek) {
            bracketStack.push(bracket)
        } else {
            if (matchBrackets[bracket] === peek){
                bracketStack.pop()
            } else {
                result = {
                    missing: matchBrackets[bracket]
                }
            }
        }
    })
    return result
} 


const linter = (body) => {
    const bracketArr = brackets(body)
    const result = looper(bracketArr)
    if(result === true) {
        return {
            'success': true
        }
    } else return {
        'error': `missing ${result.missing}`
        
    }
}

const testLinter = linter('function add(a, b) {]return a + b;}')
console.log(testLinter);


module.exports = {
    linter
};
