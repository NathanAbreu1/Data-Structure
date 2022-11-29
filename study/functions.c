// Defined Function

#include <stdio.h>

int addNumbers(int num1, int num2);

int main(){

  int num1, num2, sum;

  printf("Enter your numbers:\n");

  scanf("%d", &num1);
  scanf("%d", &num2);

 sum = addNumbers(num1, num2);

 printf("%d", sum);

}

int addNumbers(int num1, int num2){

  int result;

  result = num1 + num2;

  return result;
}
