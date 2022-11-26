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
