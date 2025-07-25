function fibs(val) {
    let first = 0;
    let second = 1;
    let array = [];
    if (val === 1) {
        array.push(first);
    } else if (val >= 2) {
        array.push(first);
        array.push(second);
    }
    for (let i = 2; i < val; i++) {
        let result = first + second;
        first = second;
        second = result;
        array.push(result);
    }
    return array;
}

console.log(fibs(6));

function fibsRec(val, result = [0, 1]) {
    if (val <= 0) return [];
    if (val === 1) return [0];
    if (val === 2) return result;
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibsRec(val - 1, result);
}

console.log(fibsRec(6));
