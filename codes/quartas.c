#include <stdio.h>

int main (void)
{

  int T, N;

  char nome[10];
  int ponto;

  scanf("%d %d", &T, &N);

  while (T != 0)
  {

    int total = 0;

    for (int i = 1; i <= T; ++i)
    {
      scanf("%s %d", nome, &ponto);
      total += ponto;
    }

    printf("%d\n", N*3 - total);

    scanf("%d %d", &T, &N);

  }

}

