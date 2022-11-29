// Maloc (Memory Allocation)

// Maloc basicamente é a alocação de memória em uma variável a ponto de ter mais controle sobre a quantidade de bytes no programa, querendo otimizar o programa.

#include <stdio.h>
#include <stdlib.h>

int main(void){

char *nome;

nome = (char *) malloc(21);

scanf("%s", nome);

printf("%s", nome);

  return 0;
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

// Passagem por referencia = Possibilidade de modificar variavel

int referencia(int x, int y, int result){

result = x + y;

return result;

}

// passagem por valor = mantem o valor, apenas faz uma copia

int valor(int x, int y){

return y + x;

}


// QuickSort == Divide and conquer, mais rapido.
// InsertionSort == Compara elementos 1 por 1;
// SelectionSort == Compara mas nao funciona listas grandes.

