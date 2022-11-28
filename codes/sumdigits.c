#include <stdio.h>

#define ulli unsigned long long int

ulli sum (ulli *digit, ulli n)
{

  if (*digit == 0)
    return n;

  else {

    n += *digit%10;
    *digit /= 10;
    return sum(digit, n);

  }

}

int main()
{

  ulli digit;
  scanf("%llu", &digit);

  printf("%llu\n", sum(&digit, 0));
}
