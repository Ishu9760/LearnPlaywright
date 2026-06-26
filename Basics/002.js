


function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reverseString + = text[i];
    }
    return reversed;
}

const input = "hello";
const output = reverseString(input);

console.log("Input:", input);
console.log("Reversed:", output);
