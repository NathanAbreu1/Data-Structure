#include <stdio.h>

void count (char *string, unsigned int *conta)
{

  if (*string)
  {
    if (*string == *(string + 2))
      ++*conta;

    count(string + 1, conta);
  }
}

int main (void)
{
  char input[201];
  unsigned int conta = 0;

  scanf("%s", input);

  count(input, &conta);

  printf("%u\n", conta);
}