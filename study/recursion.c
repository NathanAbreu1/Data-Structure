// Factorial

#include <stdio.h>

long int factorial(int n);

int main(){

  int n;

  printf("Enter the number you want the factorial:\n");

  scanf("%d", &n);

  printf("The factorial of %d is: %ld", n, factorial(n));

  return 0;
}

long int factorial(int n){

  if(n == 1){

    return 1;

  }else{

    return n*factorial(n-1);

  }
}





// Move the X using Recursion

#include <stdio.h>

void movex(char *word);

int main(){

  char word[100];

  scanf("%s", word);

  movex(word);

  return 0;
}

void movex(char *word){

    if(*word == 'x'){

      movex(word+1);
      printf("%c", *word);

    }else if(*word){

      printf("%c", *word);
      movex(word+1);

    }
  }




// F91 Number

#include <stdio.h>

unsigned int f91 (unsigned int n);

int main(){

  unsigned int a;

  while(scanf("%u", &a) != EOF){
    
    if(a == 0){
      continue;
    }

    printf("f91(%u) = %u\n", a, f91(a));
  }


  return 0;
}

unsigned int f91 (unsigned int n){

  if (n >= 101){
    return n-10;
  }else{
    return f91(f91(n+11)); // n <= 100
  }
  

}




// Fibonacci

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