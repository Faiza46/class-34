const first = { a: 2, b: 3 };
const second = { a: 2, b: 3 };
const third = first;

if (first === second) {
    //console.log("first nad second object are same");
}
else {
    //console.log("first nad second object are not same");
}

if (first === third) {
    // console.log("first nad third object are same");
}
else {
    //console.log("first nad third object are not same");
}

if (JSON.stringify(first) === JSON.stringify(second)) {
    //console.log("object are same");
}
else {
    //console.log("object are not same");
}