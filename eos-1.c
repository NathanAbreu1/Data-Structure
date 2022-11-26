#include <stdio.h>

int main ()
{
  unsigned int ascii;

  while (scanf("%x", &ascii) != EOF)
  {
    while (ascii != 0x0)
    {
      putchar(ascii % 0x100);
      ascii /= 0x100;
    }
  }

  putchar('\n');
}