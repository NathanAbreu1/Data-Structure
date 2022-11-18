#include <stdio.h>

int main(){

  int pessoa1 = 0;
  int pessoa2 = 0;
  int pessoa3 = 0;
  int sum = 0;
  int judge = 0;

  scanf("%d", &pessoa1);
  scanf("%d", &pessoa2);
  scanf("%d", &pessoa3);

  sum = pessoa1 + pessoa2 + pessoa3;

  scanf("%d", &judge);

  if(sum == judge){
    printf("Acertou");
  }else{
    printf("Errou");
  }

  return 0;
}