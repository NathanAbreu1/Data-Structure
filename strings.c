
// Printing a string
#include <stdio.h>

int main(){

  char string[100];
  scanf("%s", string);

  printf("%s", string);

  return 0;
}



// Comparing Strings

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){

  char string1[] = "abcd1";
  char string2[] = "abcd2";

  printf("%d\n",strcmp(string2,string1));

  return 0;
}



// Comparing Strings entirely

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){

  char string1[10];
  char string2[10];

  printf("Enter your first string:\n");
  scanf("%s", string1);

  printf("Enter your second string:\n");
  scanf("%s", string2);

  if(strcmp(string1, string2)){
    printf("Strings are Different\n");
  }else{
    printf("Strings are equal\n");
  }
  
  return 0;
}



// Getting a single character from a string
// usually use the %c for getting that along with [position];

#include <stdio.h>

int main(){

  char string[0];
  scanf("%c", string);

  printf("%s ", string);

  return 0;
}



// Counting n words in an array;

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){

  char word[3];
  int n;
  int counteryes = 0;
  int counterno = 0;

  printf("Enter the amout of words for your counter:\n");
  scanf("%d", &n);

  printf("Enter your strings:\n");

  for(int i = 0; i < n; i++){

    printf("word-%d: ", i);
    scanf("%s", word);

    if(word[0] == 'y'){
      counteryes++;
    }else{
      counterno++;
    }
  }

  printf("The amout of times you typed yes is: %d\n", counteryes);
  printf("The amout of times you typed no is: %d\n", counterno);

  return 0;
}


// Find the length of a string

#include <stdio.h>
#include <stdlib.h>

int main(){

  char text[100];
  int counter = 0;
  int i;

  printf("Enter your text:\n");
  scanf("%s", text);

  for(i = 0; text[i]!='\0'; i++){
    counter++;
  }

  printf("The text you entered is: %s \n The amout of words is: %d \n", text, counter);


  return 0;
}