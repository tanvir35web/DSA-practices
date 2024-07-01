const arr = [1, 2, 3, 4, 2, 3, 1, 2, 4, 4, 5];

function findFrequency(arr) {
    // Create an empty dictionary to store frequency of elements
    var frequencyDict = {};

    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];

        // If the element is already in the dictionary, increment its frequency
        if (frequencyDict[element]) {
            frequencyDict[element]++;
        } 
        // Otherwise, initialize its frequency to 1
        else {
            frequencyDict[element] = 1;
        }
    }

    // Return the dictionary containing frequency of elements
    return frequencyDict;
}

console.log(findFrequency(arr));