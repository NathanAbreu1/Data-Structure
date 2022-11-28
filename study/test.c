#include <stdio.h>

long int fibonacci(int n);

int main(){

  int n;

  printf("Enter the Fibo Number:\n");

  scanf("%d", &n);

  printf("The fibo of %d is: %ld", n, fibonacci(n));
  
  return 0;
}

long int fibonacci(int n){

  if(n == 0){
    
    return 0;

  }

  if(n == 1){

    return 1;

  }else{

    return fibonacci(n-1) + fibonacci(n-2);
  }
}