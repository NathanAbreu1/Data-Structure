#include <stdio.h>

int main(){

  int n = 0;
  int sum = 0;
  int personvalue = 0;
  int guess = 0;

  scanf("%d", &n);

  for(int i = 1; i <= n; i++){

    scanf("%d", &personvalue);

    sum = sum + personvalue;

  }

  scanf("%d", &guess);

  if(sum == guess){
      printf("Acertou");
    }else{
    printf("Errou");
 }


  return 0;
}