
#include <stdio.h>

int fun(int n){
  
  if(n == 0){
    return 1;
  }else{
    return 7 + fun(n - 2);
  }
}

int main(){
  
  printf("%d", fun(4));

  return 0;
}


#include <stdio.h> 

int fun(int n){
  
  if(n == 1){
    return 1;
  }else{
    return 1 + fun (n-1);
  }
}

int main(){

  int n = 3;

  printf("%d", fun(n));

  return 0;
}


// Fibonacci using direct recursion
#include <stdio.h>

int fibonacci_01(int i){

  if(i == 0){
    return 0;
  }

  if( i == 1){
    return 1;
  }

  return fibonacci_01(i - 1) + fibonacci_01(i - 2);

}

int main(){

  int i, n;

  printf("Enter a digit for fibonacci series: ");
  scanf("%d", & n);

  for(i = 0; i < n; i++){
    printf(" %d ", fibonacci_01(i));
  }

  return 0;

}



// Fbonacci using indirect recursion

#include <stdio.h>

void odd();
void even();
int n=1;

int main(){

  odd();

}

void odd(){

  if(n <= 10){
    printf("%d", n+1);
   n++;

  even();

  }

  return;
}

void even(){

  if(n <= 10){
    printf(" %d ", n-1);
  n++;

  odd();

  } 
  return;
}


// Factorial Number

#include <stdio.h>

int factorial_01(int n);

int main(){

  int a;
  int factor;

  printf("Enter your number: \n");
  scanf("%d", &a);

  factor = factorial_01(a);

  printf(" factorial of %d = %d \n", a, factor);
  return 0;
}

int factorial_01(int n){

  if(n == 0){
    return 1;
  }else{
    return (factorial_01 (n-1)*n);
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