#include <stdio.h>

int soma(int a, int b){
  int sum;

  sum = a+b;

  return sum;
}
int main(){

  int sum = 0;
  int num1, num2;

  printf("Enter the first number:\n");
  scanf("%d", &num1);
  printf("Enter the second number:\n");
  scanf("%d", &num2);

  sum = soma(num1, num2);

  printf("%d", sum);

  return 0;
}

