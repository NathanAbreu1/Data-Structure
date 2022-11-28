#include <stdio.h>

long int multiplyNumbers(int n);

long int multiplyNumber(int n){

    if(n<= 1){

        return 1;

    }else if(n >= 1){

         n*multiplyNumbers(n-1);
    }
}