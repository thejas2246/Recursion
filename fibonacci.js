function fibs(val) {
    let first = 0;
    let second = 1;
    let array = [];
    array.push(first);
    for (let i = 1; i < val; i++) {
        let result = first + second;
        first = second;
        second = result;
        array.push(result);
    }
    return array;
}

console.log(fibs(5));
