function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let key = array[i];
		let j = i - 1;

		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = key;
	}
	return array;
}

const unsortedArray = [9, 4, -9, -0, 107, 6, 2, 5, 1, 8, 3, 7];
console.log(insertionSort(unsortedArray));
