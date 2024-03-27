// Single line comment.

/*
Multi
line
comment
*/

// How to compile c programs on the command line:
// gcc -o mybinaryfile mysourcefile.c
// gcc -o a.out program.c


// PROGRAM 1
// #include <stdio.h>

// int blah = 6;

// void testFunction() {
//   printf("testFunc just got run!\n");
// }

// int main() {
//   printf("Hello, world\n");
//   testFunction();
//   printf("the number: %d", blah);
//   return 0;
// }


// PROGRAM 2
// #include <stdio.h>

// int main(void)
// {
//   printf( "This is an example of something printed!");
// }


// PROGRAM 3
// #include <stdio.h>
// #include "object.h"

// int main() {
//   //printf( "This prints a character, %c\na number, %d\na floating point, %f", 'z', 123, 456.789 );
//   hello_world();
// }


// PROGRAM 4

// #include <stdio.h>

// int main() {
//   printf("Hello, World!\n");
//   return 0;
// }


// PROGRAM 5

// #include <stdio.h>

// int radius, area;
// int main(void) {
//   printf("Enter radius (i.e. 10):");
//   scanf("%d", &radius);
//   area = (int) (3.14159 * radius * radius);
//   printf("\n\nArea = %d\n", area);
//   return 0;
// }

// PROGRAM 6

// #include <stdio.h>

#include <stdio.h>

int x, y;

int main(void) {
  for (x = 0; x < 5; x++) {
    printf("\n");
    for (y = 0; y < 5; y++) {
      printf("X");
    }
  }
  return 0;
}
