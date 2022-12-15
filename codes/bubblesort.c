
// Print the elements of an array in correct order

#include <stdio.h>

void bubblesort(int array[], int size);
void printarray(int array[], int size);

int main(){

int array[] = {6, -2, 7, -13, 28};
int n = 5;

printf("The current array is:\n");

printarray(array, n);

printf("The array after bubblesort is:\n");

bubblesort(array, n);
printarray(array, n);

    return 0;
}


void bubblesort(int array[], int size){
    
    int temp;

    for(int step = 0; step < size - 1; step++){

        for(int i = 0; i < size - step - 1; i++){

            if(array[i] > array[i + 1]){

                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

}

void printarray(int array[], int size){

    for(int i = 0; i < size; i++){

        printf("%d ", array[i]);
    }

    printf("\n");
}


// Concatenate arrays and use bubblesort

#include <stdio.h>

void bubblesort(int array[], int size);
void printarray(int array[], int size);
void concatarrays(int array1[], int array2[], int sumarray[]);


int main(){

    int array1[] = {6, 5, 9, -11, 2, 5};
    int array2[] = {3, -2, 7, -13, 28, 26};
    int array3[1000];
    int n = 12;

    printf("Array 1 before bubble: \n");
    printarray(array1, n);

    printf("Array 2 before bubble: \n");
    printarray(array2, n);

    printf("Arrays summed: \n");
    concatarrays(array1, array2, array3);

    printf("Array after bubblesort: \n");
    bubblesort(array3, n);
    printarray(array3, n);

    return 0;
}

void bubblesort(int array[], int size){

    int temp;

    for(int step = 0; step < size - 1; step++){

        for( int i = 0; i < size - step -1; i++){

            if(array[i] > array[i + 1]){

                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
}

void printarray(int array[], int size){

    int i;

    for(i = 0; i < size; i++){

        printf("%d ", array[i]);

    }

    printf("\n");

}

void concatarrays(int array1[], int array2[], int concat[]){

    int index = 0;
    int i;
    int size = 12;

    for(i = 0; i < size; i++){

       concat[index++] = array1[i];
       concat[index++] = array2[i];

    }

    for(i = 0; i < size; i++){

        printf("%d ", concat[i]);
    }

    printf("\n");

}