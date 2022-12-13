#include <stdio.h>
#include <stdlib.h>

int main(){

int i;
int j;
int k;
int golst1, golst2;
char team[] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'};
char result[10]; 
int aux = 0;

for(i = 0; i < 8; i++){

  scanf("%d %d", &golst1, &golst2);

  if(golst1 > golst2){

    result[i] = team[aux];

  }else{

    result[i] = team[aux+1];
  }

  aux += 2;
  
}

aux = 0;

for(j = 0; j < 4; j++){

  scanf("%d %d", &golst1, &golst2);

 if(golst1 > golst2){

    result[j] = result[aux];

  }else{

    result[j] = result[aux+1];
  }

  aux += 2;
}

aux = 0;

for(k = 0; k < 2; k++){

  scanf("%d %d", &golst1, &golst2);

  if(golst1 > golst2){

    result[k] = result[aux];

  }else{

    result[k] = result[aux+1];
  }

  aux += 2;

}

  scanf("%d %d", &golst1, &golst2);
  
  if(golst1 > golst2){

    printf("%c", result[0]);

  }else{

    printf("%c", result[1]);
  }

}