let x = [5, 3, 1, 9, 6, 2, 8, 7, 4];

function bubbleSort(input_arr) {
    for (let i = 0; i < input_arr.length; i++) {
        for (let j = 0; j < input_arr.length - i; j++) {
            if (input_arr[j] > input_arr[j + 1]) {
                let swapTemp = input_arr[j];
                input_arr[j] = input_arr[j + 1];
                input_arr[j + 1] = swapTemp;
            }
        }
    }
    return input_arr
};

console.log(bubbleSort(x));

def bubble_sort(arrayInput):
    length=len(arrayInput)
    temp=0
    counter=1
    while counter!=0:

        for i in range(length-1):
            counter=0
            if(arrayInput[i]>arrayInput[i+1]):
                temp=arrayInput[i]
                arrayInput[i]=arrayInput[i+1]
                arrayInput[i+1]=temp
                counter+=1
    return arrayInput

arrayInput=[5,9,2,7,6]
print(bubble_sort(arrayInput))


// # Bubble Sort
// #Given an array of numbers, sort the numbers by swapping adjacent numbers that are in the wrong order
// #Ex:
// #[5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]*


function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//robs solution
function bubbleSort(arr){
    for(var j = 0; j< arr.length; j++){
        for(var i = 0; i< arr.length-j; i++){
            if (arr[i]> arr[i+1]){
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }

        }
    }
    console.log(arr)
}


bubbleSort([7,5,3,4,2,8,1])