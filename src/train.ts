// M-TASK:

function getSquareNumbers(numbers: number[]) {
  return numbers.map((number) => {
    const square = number ** 2;
    return { number, square };
  });
}

console.log(getSquareNumbers([1, 2, 3]));

/* Project Standards:
  - Logging standards
  - Naming standards
    CAMEL case : function, method, variable 
    PASCAL : class                            
    KEBAB case : folder - file
    SNAKE case : css
  - Error handling
*/

/* Request:
Traditional Api
Rest Api
GraphQL Api
*/

/* Cookie:
  request: join
  self: destroy
*/

/* Validation:
  Frontend: validation
  Backend: validation
  Database: validation
*/
