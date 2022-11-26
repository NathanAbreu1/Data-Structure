#include <stdio.h>

unsigned int f91 (unsigned int n);

int main(){

  unsigned int a;

  while(scanf("%u", &a) != EOF){
    
    if(a == 0){
      continue;
    }

    printf("f91(%u) = %u\n", a, f91(a));
  }


  return 0;
}

unsigned int f91 (unsigned int n){

  if (n >= 101){
    return n-10;
  }else{
    return f91(f91(n+11)); // n <= 100
  }
  

}