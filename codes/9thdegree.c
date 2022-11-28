#include <stdio.h>

void soma ( char * numbers, int * valor)
{

  if (*numbers)
  {

    *valor += *numbers - '0';
    soma(numbers+1, valor);

  }

}

int rumo9s (int valor)
{

  if (valor/10 == 0)
    return valor;

  else
    return rumo9s(valor/10) + valor % 10;

}

int grau9 (int valor)
{

  if (valor < 10)
    return 1;

  else
    return grau9( rumo9s(valor) ) + 1;


}

int main ()
{

  enum { N = 1000 };
  char string[N + 1];

  while (scanf("%s", string) != EOF && !( string[0] == '0' && string[1] == '\0' ))
  {

    int total = 0;
    soma(string, &total);

    if (total == 0) break;

    if (total % 9 == 0)
      printf("%s is a multiple of 9 and has 9-degree %d.\n", string, grau9(total));
    else
      printf("%s is not a multiple of 9.\n", string);

  }

}