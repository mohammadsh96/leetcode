## XOR approach :

- The XOR operation, represented by the caret symbol **^**,
  is a bitwise operator in JavaScript that compares the binary representation of two numbers
   and returns a new number with each bit set if and only 
   if exactly one of the corresponding bits in the original numbers was set.

- For example, let's consider the following two numbers in binary representation:

```
  0011 (decimal 3)
^ 0101 (decimal 5)
------
  0110 (decimal 6)

```

- As you can see, the XOR operation returns a new number with the bits that are different between the two input numbers set to 1.

- In the previous code, the XOR operation is used to determine the unique number in the array 
 that appears only once while all other numbers appear three times.
  The code initializes the result variable to 0 and iterates through the array.
   In each iteration, the current element in the array is XORed with result
    and the result is stored back into result.
     Because all numbers in the array appear three times except for one,
      the XOR operation cancels out the three occurrences of each number and leaves only the unique number in result.