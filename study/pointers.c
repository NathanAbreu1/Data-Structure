
// Declariong Pointers:


#include <stdio.h>

int main(){

  // A pointer is what holds a memory adress of another variable;
  
  int myAge = 42; // Pointer with and adress;
  int * pmyAge = &myAge; // Adressing myAge to another adress;
  double gpa = 3.4;
  double * pgpa = &gpa;
  char hey;
  char * phey = &hey;

  printf("Your pointer is: %p\n", &myAge); // Pointer adress;
  printf("Your age is: %d\n", myAge); // Real number;
  printf("The pointer variable adress is: %p\n", pmyAge); // Pointer new adress;

  return 0;
}

// Find the sum and difference using pointers;
#include <stdio.h>

int main(){

  float num1;
  float num2;
  float *ptr1;
  float *ptr2;

  ptr1 = &num1;
  ptr2 = &num2;

  float sum, difference;

  scanf("%f", &num1);
  scanf("%f", &num2);

  sum = (*ptr1) + (*ptr2);
  difference = (*ptr1) - (*ptr2);

  printf("%0.2f\n", sum);
  printf("%0.2f", difference);

  return 0;
}


// Find the product and the quocient using pointers;

#include <stdio.h>
#include <stdlib.h>

int main(){

double num1, num2, num3, num4;
double sum1, sum2;
double product = 0;
double quocient = 0;

double *ptr1;
double *ptr2;

ptr1 = &sum1;
ptr2 = &sum2;

printf("Enter your numbers:\n");

scanf("%lf", &num1);
scanf("%lf", &num2);
scanf("%lf", &num3);
scanf("%lf", &num4);

sum1 = num1 + num2;
sum2 = num3 + num4;

product = (*ptr1) * (*ptr2);
quocient =(*ptr1) / (*ptr2);

printf("The product of the numbers is: %0.2lf\n", product);
printf("The qoucient of the numbers is: %0.2lf", quocient);


  return 0;
}


// Swap two numbers using pointers and functions;

#include <stdio.h>

void swap(int *num1, int *num2);

int main(){

  int num1;
  int num2;

  printf("Enter two numbers:\n");
  scanf("%d %d", &num1, &num2);

  printf("Numbers before Swappin: %d %d\n", num1, num2);

  swap(&num1, &num2);

  printf("Numbers after Swappin: %d %d\n", num1, num2);


  return 0;
}

void swap(int *num1, int *num2){

  int *num3;

  *num1 = *num2;
  *num2 = *num3;
  *num3 = *num1;

}


// Copy one array into another using pointers

#include <stdio.h>

void swaparray(int *array1[], int *array2[]);

int main(){

  int array1[100];
  int array2[100];
  int n;
  int i;

  printf("The size of ur array:\n");
  scanf("%d", &n);

  printf("Enter the elements of your first array:\n");

  for(i = 0; i < n; i++){
    scanf("%d", &array1[i]);
  }

  swaparray(array1, array2);

  printf("The elements BEFORE swapping of your first array are:\n");

  for(i = 0; i < n; i++){

    printf("%d\n", array1[i]);
    
  }
  printf("The elements BEFORE swapping of your second array are:\n");

  for(i = 0; i < n; i++){

    printf("%d\n", array2[i]);

  }

  swaparray(array1[i], array2[i]);

  printf("\n\n\n\n\n\n");

  printf("The elements AFTER swapping your first array:\n");

  for(i = 0; i < n; i++){

    printf("%d\n", array1[i]);

  }

  printf("The elements AFTER swapping your first array:\n");

  for( i = 0; i < n; i++){
    
    printf("%d\n", array2[i]);

  }



  return 0;
}

// Swaparray
void swaparray(int *array1[], int *array2[]){

int i;

 *array1[i] = *array2[i];
 *array2[i] = *array1[i];

}

// Maloc (Memory Allocation)

#include <stdio.h>
#include <stdlib.h>

int main(void){

  char *nome;

  nome = (char *) malloc(21);

  printf("Digite seu nome: ");
  gets(nome);

  printf("%sn", nome);

  return 0;
}