# JAVASCRIPT

## I. All About Variable

### Variable Declarations

- To use variables in **JavaScript**, we first need to create it i.e. declare a variable. To declare variables, we use one of the **var, let,** or **const** keywords.

#### VAR:

- Before the advent of ES6, **var** declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge.

  ##### 1. **Scope of var:**

  - Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

  - The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

    - **var** is **_function scoped_** when it is declared within a function. This means that it is available and can be accessed only within that function.

    - Exam :

      ```js
      var greeter = "hey hi";

      function newFunction() {
        var hello = "hello";
      }
      ```

    - Here, **greeter** is _globally scoped_ because it exists outside a function while hello is _function scoped_. So we cannot access the variable hello outside of a function. So if we do this:

      ```js
      var tester = "hey hi";
      function newFunction() {
        var hello = "hello";
      }
      console.log(hello); // error: hello is not defined
      ```

  ##### 2. **var variables** can be re-declared and updated

  - This means that we can do this within the same scope and won't get an error.
  - Exam:

    ```js
    var greeter = "hey hi";
    var greeter = "say Hello instead";
    ```

  - and this also

    ```js
    var greeter = "hey hi";
    greeter = "say Hello instead";
    ```

  ##### 3. Hoisting of var

  - **Hoisting** is a JavaScript **mechanism(cơ chế)** where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

  - Exam:

    ```js
    console.log(greeter);
    var greeter = "say hello";
    ```

  - It is interpreted as this:

    ```js
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello";
    ```

  ##### - So var variables are hoisted **to the top** of their scope and **initialized with a value of undefined.**

#### LET Variable

- **LET** is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered.

- **Let** is **_block scoped_**:

  - **A block** is a chunk of code bounded by {}. A block lives in curly **braces(dấu ngoặc nhọn)**. Anything within curly braces is a block.

  - So a variable declared in a block with let is only available for use within that block.
  - Exam:

    ```js
    let greeting = "say Hi";
    let times = 4;

    if (times > 3) {
      let hello = "say Hello instead";
      console.log(hello); // "say Hello instead"
    }
    console.log(hello); // hello is not defined
    ```

- **LET** can be updated but not re-declared.

- Just like var, a variable declared with let **can be updated** within its scope.

- Unlike var, a let variable **cannot be re-declared** within its scope. So while this will work:

  ```js
  let greeting = "say Hi";
  greeting = "say Hello instead";
  ```

- this will return an error:
  ```js
  let greeting = "say Hi";
  let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
  ```
- Hoisting of let

- Just like var, let declarations are hoisted to the top.
- Unlike var which is initialized as undefined, the let keyword is not initialized.

###### So if you try to use a let variable before declaration, you'll get a Reference Error.

#### CONST Variable:

- Variables declared with the const maintain constant values. **const** declarations share some **similarities(tương đồng)** with **let** declarations.

- **Const** declarations are **block scoped**

- Like **let declarations**, **const** declarations can only be accessed within **the block** they were declared.

- **Const** cannot be updated or re-declared:

  - This means that the value of a variable declared with const remains the same within its scope. It **cannot be updated or re-declared**.

###### So if we declare a variable with const, we can neither do this:

```js
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.
```

#### Hoisting of const

- Just like **let, const** declarations are** hoisted to the top** but are **not initialized**.

## Naming JavaScript Variables

- Variable names cannot contain spaces.

- Variable names must begin with a letter, an underscore (\_) or a dollar sign ($).

- Variable names can only contain letters, numbers, underscores, or dollar signs.

- Variable names are case-sensitive.

##### Certain words may not be used as variable names, because they have other meanings within JavaScript. Check out this complete list of the reserved words.

- Don’t use names that are too short. Simple one-letter names or names that don’t make sense are not a good option when naming variables.

- Use more than one word to name your variable. This will ensure your variable name is precise.

- When using more than one word in your variable names, always put the adjective to the left. For example, this is correct: var greenGrass.

- Pick a style for names with more than one word, and stick to it. The two most common ways to join words to create a name are camelCase and using an underscore (\_). JavaScript is flexible — either method works.

## JavaScript Scope

### Block Scope:

- Before ES6 (2015), JavaScript had only **Global Scope and Function Scope**.

- ES6 introduced two important new JavaScript keywords: **let and const.**

- These two keywords provide **Block Scope** in JavaScript.

- Variables declared inside a { } block cannot be accessed from outside the block:

  ```js
  {
    let x = 2;
  }
  // x can NOT be used here
  ```

- Variables declared with the **var** keyword can NOT have block scope.

- Variables declared inside a { } block can be accessed from outside the block.

- Exam:
  ```js
  {
    var x = 2;
  }
  // x CAN be used here
  ```

### Local Scope

- Variables declared within a JavaScript function, become LOCAL to the function.

- Exam:

  ```js
  // code here can NOT use carName
  function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }

  // code here can NOT use carName
  ```

### Function Scope

- JavaScript has function scope: **Each function creates a new scope.**

- Variables defined inside a function are not accessible (visible) from outside the function.

- Variables declared with var, let and const are quite similar when declared inside a function.

- They all have Function Scope:

  ```js
  function myFunction() {
    var carName = "Volvo"; // Function Scope
  }
  function myFunction() {
    let carName = "Volvo"; // Function Scope
  }
  function myFunction() {
    const carName = "Volvo"; // Function Scope
  }
  ```

### Global Scope

- Variables declared Globally (outside any function) have Global Scope.

- Global variables can be accessed from anywhere in a JavaScript program.

- Variables declared with var, let and const are quite similar when declared outside a block.

- They all have Global Scope:

  ```js
  var x = 2; // Global scope
  let x = 2; // Global scope
  const x = 2; // Global scope
  ```
