// TASK-R

function calculate(str: string): number {
  const numbers = str.split("+");

  const result = numbers.reduce((acc, num) => acc + parseInt(num), 0);

  return result;
}

console.log(calculate("1+3"));

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
