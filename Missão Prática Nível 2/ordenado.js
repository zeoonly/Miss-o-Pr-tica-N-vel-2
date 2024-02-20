
const swap = (array, pos1, pos2) => {
    const temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};


const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};


const bubble_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};


const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
    return array;
};



const quick_sort = (array, start, end) => {
    if (start >= end) {
        return;
    }
    const index = particionamento(array, start, end);
    quick_sort(array, start, index - 1);
    quick_sort(array, index + 1, end);
    return array;
};



const particionamento = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, end);
    return i + 1;
};
