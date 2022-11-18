#include <stdio.h>

int main(){

char palavra[3];

unsigned int triagem = 0, sim = 0, palavras = 0;

while(scanf("%s\n", palavra) != EOF){

    if (palavra[0] == 's')++sim;

    ++palavras;

    if(palavras == 10){

        palavras = 0;
        if( sim >= 2)++triagem;
            sim = 0;
    }
}

    printf("%d\n", triagem);
}