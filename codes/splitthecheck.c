#include <stdio.h>

int faz_conta_direito(int parcelas, char op){

  int result;
  int numbers;

  scanf("%d", &result);

  for(int i = 1; i < parcelas; i++){
    scanf("%d", &numbers);

      if(op == '+'){
        result += numbers;
      }else{
        result -= numbers;
      }
  }

  return result;
}


int main(){
  printf("%d\n", faz_conta_direito(4, '-'));
}

