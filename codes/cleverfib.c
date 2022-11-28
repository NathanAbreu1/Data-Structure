#include <stdio.h>

enum{N = 80};

unsigned long long memoir[N+1] = { [1] = 1, [2] = 1 };

unsigned long long fibonacci (int n)
{

  if (!memoir[n])
    memoir[n] = fibonacci(n-1) + fibonacci(n-2);

  return memoir[n];

}
