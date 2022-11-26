#include <stdio.h>

void swap ( int *a, int *b ){

  int c;

  c = *a;
  *a = *b;
  *b = c;

}

/*
int main(){

  int a = 20;
  int b = 50;

  swap(&a,&b);

  printf("%d %d", a,b);

  return 0;

  }
  */