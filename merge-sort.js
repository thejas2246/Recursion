function mergeSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return 0;
    } else {
        let middle = Math.floor((left + right) / 2);
        mergeSort(array, left, middle);
        mergeSort(array, middle + 1, right);
        merge(array, left, middle, right);
    }
}

function merge(array, l, m, r) {
    let temp = [];
    let i = l;
    let j = m + 1;
    while (i <= m && j <= r) {
        if (array[i] <= array[j]) {
            temp.push(array[i]);
            i++;
        } else {
            temp.push(array[j]);
            j++;
        }
    }

    while (i <= m) {
        temp.push(array[i]);
        i++;
    }
    while (j <= r) {
        temp.push(array[j]);
        j++;
    }

    for (let k = l; k <= r; k++) {
        array[k] = temp[k - l];
    }
}

let numberArray = [3, 9, 1, 6, 4];
mergeSort(numberArray);
console.log(numberArray);
