#include <stdio.h>

int main(){

char palavra[3];
int sim = 0;
int palavras = 0;
int trial = 0;

for(int i = 1; i <= 10; i++){

    scanf("%s", palavra);

    if(palavra[0] == 's'){
        sim++;
    }

    ++palavras;

    if(palavras == 10){
        palavras = 0;
        if(sim >= 2){
        trial++;
        }
    }

}

printf("O número de triagens é : %d\n", trial);

}