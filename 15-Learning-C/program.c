#include <stdio.h>

int blah = 6;

void testFunction() {
  printf("testFunc just got run!\n");
}

int main() {
    printf("Hello, world\n");
    testFunction();
    printf("the number: %d", blah);
    return 0;
}