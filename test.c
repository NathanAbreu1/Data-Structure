#include <stdio.h>

void movedx(char * word);

int main(){

    char word[100];

    scanf("%s", word);

    movedx(word);

    return 0;
}

void movedx(char * word){

    if(*word == 'x'){

        movedx(word+1);
        printf("%c", *word);

    }else if(*word){

        printf("%c", *word);
        movedx(word+1);

    }
}