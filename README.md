# AUDITORIUM-Challenge

## I had to complete [the following challenge](https://replit.com/@appbrewery/Interview-Question)

## A brief overview of the solution algorithm:
- we check the validity of the elements of the input array according to our restrictions, removing invalid elements
- if the array has less than two elements after validation, we return the value "undefined", since we need to calculate the area between two elements
- we determine the area between two elements "houses", while taking the smallest height of the two elements to calculate the area between them
- the function returns the largest area after it has sequentially calculated all the areas

I hope my first experience writing code in Typescript will be acceptable. I spent most of my time setting up the execution of the code in Typescript, since this is really my first experience. I familiarized myself with the main differences between Typescript and Javascript and implemented the solution first in Javascript (file **optimalwayjs.js**), and then adapted it for Typescript (file **optimalwayts.ts**). Organised the project folder according to the recommendations for using Typescript and Javascript together.
