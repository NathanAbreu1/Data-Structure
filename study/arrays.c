// Transfer elements from one array to another

#include <stdio.h>

int main(){
  int array1[100];
  int array2[100];
  int i;

  for(i = 0; i < 10; i++){
    scanf("%d", &array1[i]);

    array2[i] = array1[i];
  }

  for(i = 0; i < 10; i++){
  printf("%d", array2[i]);
  }
}

// Reverse Array

#include <stdio.h>

int main(){

  int array[100];
  int n;
  int i;

  printf("Enter the length of your array:\n");
  
  scanf("%d", &n);

  printf("Enter the elements of your array:\n");
 
  for(i = 0; i < n; i++){
    printf("Element-%d: ", i);
    scanf("%d", &array[i]);
  }

  printf("The elements of your array are:\n");

  for(i = 0; i < n; i++){
    printf("% d", array[i]);
  }

  printf("\n");

  printf("The elements of your inversed array:\n");

  for(i = n-1; i >= 0; i--){
    printf("% d", array[i]);
  }

  printf("\n");

  return 0;
}


// Input in a array
#include <stdio.h>

int main(){

  int array[10];
  int i;
  int n;

  printf("Type the size of your array:\n");
  scanf("%d", &n);
  for(i = 1; i <= n; i++){
    printf("Element %d:\n", i);
    scanf("%d", &array[i]);
  }

  printf("The elements of your array are:\n");
  for(i = 1; i <= n; i++){
    printf("%d", array[i]);
  }
  printf("\n");

  return 0;
}

// Sum of elements in a array;

#include <stdio.h>

int main(){

  int array[10];
  int sum = 0;
  int n;

  scanf("%d", &n);

  for(int i = 0; i < n; i++){

    scanf("%d", &array[i]);

    sum = sum + array[i];
  }

  printf("%d", sum);


  return 0;
}


// Reverse array
#include <stdio.h>

int main(){

  int array[100];
  int n;
  int i;

  printf("Enter the size of your array:\n");
  scanf("%d", &n);

  printf("Enter the elements of your array:\n");
  for(i = 0; i < n; i++){
    printf("element %d:\n", i);
    scanf("%d", &array[i]);
  }

  printf("The numbers of your array are:\n");
  for(i = 0; i < n; i++){
    printf("% 5d", array[i]);
  }

  printf("\nThe reverse numbers in your array are:\n");
  for(i =n-1; i >= 0; i--){
    printf("% 5d", array[i]);
  }

  printf("\n\n\n");

  return 0;
}


// Sum of arrays;

#include <stdio.h>

int main(){

  int array1[10];
  int array2[10];
  int sum[10];
  int n;
  int i;

  printf("Enter the length of your arrays:\n");
  scanf("%d", &n);

  printf("Enter your first array:\n");
    for(i = 1; i <= n; i++){
      scanf("%d", &array1[i]);
    }

  printf("Enter your second array:\n");
  for( i = 1; i <= n; i++){
    scanf("%d", &array2[i]);
  }

  for(i = 1; i <= n; i++){
    sum[i] = array1[i] + array2[i];
  }
  
  for(i = 1; i <= n; i++){
    printf("the sum of your arrays is: \n %d\n", sum[i]);
  }

  return 0;
}

#include <stdio.h>

// Sum of elements of arrays together;

int main(){

int array1[10];
int array2[10];
int sum1 = 0;
int sum2 = 0;
int lastsum;
int i;
int n;

printf("Enter the length of your array:\n");
scanf("%d", &n);

printf("Enter the elements of your first array:\n");
for(i = 1; i <= n; i++){
  scanf("%d", &array1[i]);

  sum1 = sum1 + array1[i];
}

printf("Enter the elements of your second array:\n");
for(i = 1; i <= n; i++){
  scanf("%d", &array2[i]);

  sum2 = sum2 + array2[i];
}

lastsum = sum1 + sum2;

printf("The sum of your arrays is:\n %d", lastsum);

  return 0;
}

