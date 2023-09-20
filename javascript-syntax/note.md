# JSON

- JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
- It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

# Arrays

- Array is a special kind of object, suited to storing and managing ordered data items.

### The declaration:

```js
   // square brackets (usual)
   let arr = [item1, item2...];

   // new Array (exceptionally rare)
   let arr = new Array(item1, item2...);

```

- The call to new Array(number) creates an array with the given length, but without elements.

- The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
- If we shorten length manually, the array is truncated.

### Getting the elements:

- We can get element by its index, _like arr[0]_

- Also we can use at(i) method that allows negative indexes.
- For negative values of i, it steps back from the end of the array. If i >= 0, it works **_same as arr[i]_**.

### We can use an array as a deque with the following operations:

- push(...items) adds items to the end.
- pop() removes the element from the end and returns it.
- shift() removes the element from the beginning and returns it.
- unshift(...items) adds items to the beginning.

### What's _deque_:

- **A deque**, short for **"double-ended queue,"** is a data structure that allows you to perform insertions and deletions (additions and removals) of elements from both ends efficiently. It is similar to a queue and a stack but supports operations on both the front and rear ends of the data structure. Deques can be thought of as a hybrid between a queue and a stack.

- In a deque, you can perform the following operations:

- **Insertion at the Front** (pushFront or addFirst): Add an element to the front of the deque.

- **Insertion at the Rear** (pushBack or addLast): Add an element to the rear (end) of the deque.
- **Deletion from the Front** (popFront or removeFirst): Remove and return the element from the front of the deque.
- **Deletion from the Rear** (popBack or removeLast): Remove and return the element from the rear of the deque.
- **Peek at the Front** (front or getFirst): Get the element at the front of the deque without removing it.
- **Peek at the Rear** (back or getLast): Get the element at the rear (end) of the deque without removing it.
- **Check if the Deque is Empty** (isEmpty): Determine if the deque contains any elements.
- Deques are useful when you need to efficiently manage a collection of elements that require frequent insertions or deletions from both ends. They are commonly used in various algorithms and data manipulation tasks. Deques can be implemented using arrays, linked lists, or other data structures, depending on the programming language and requirements.

## Value Comparison Operators

- The **==** and **===** operators are used to check the equality of two operands.

- The **!=** and **!==** operators are used to check the inequality of two operands.

- **==** and **!=** are loose equality operators, i.e., they perform type conversion on the operands before comparing.

- **===** and **!==** are strict equality operators, i.e., they compare the operands without any type conversion and return false (in the case of **===** operator) even if the data types aren't same.

- == and != operators are used in situations where the data type of the operands isn't a major factor in comparison, and it could be twisted to allow comparison of two operands. e.g., The == operator can be used to verify the student's admission number (taken through a form and could be in string or number type) to the admission numbers stored in the database (in number data type).

- **===** and **!==** operators are used in situations where the data type of operands is important for the comparison, and it could not be altered to make the comparison happen. e.g., In a coding contest, the answer could be in either number or string form, but according to the rules, the point will be awarded only to string-type answers. In this case, we will use the **===** operator to compare the user's answers with the answer stored in our database.

## To loop over the elements of the array:

```js
    for (let i=0; i<arr.length; i++) //works fastest old-browser-compatible.
    for (let item of arr) //the modern syntax for items only,
    for (let i in arr) //never use.
```

- To compare arrays, **don’t use the == operator** (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

#### Instead you can use for..of loop to compare arrays item-by-item.

## Loops and Iterations:

- **For statement**

- **Do... While statement**

- **While statement**
- **For...in**

  - The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

  - **Exam:**

    ```js
    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }

    // Expected output:
    // "a: 1"
    // "b: 2"
    // "c: 3"
    ```

- **For...of**

  - The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as **Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)**, as well as the arguments object, generators produced by generator functions, and user-defined iterables.

  - **Exam:**

    ```js
    const array1 = ["a", "b", "c"];

    for (const element of array1) {
      console.log(element);
    }

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
    ```

## Control Flow:

- **Conditional statements:**

  - When you write code, you often want to perform different actions for different decisions. You can use conditional statements in your code to do this.

  - In JavaScript, we have three conditional statements: if, if...else, and switch.

- **If else:**

  - The **if** statement executes a statement if a specified condition is **truthy**. If the condition is **falsy**, another statement in the optional else clause will be executed.

  - **Examp:**

    ```js
    if (condition) {
      statement1;
    } else {
      statement2;
    }
    ```

- **Switch Case:**

  - The **switch** statement evaluates an expression, matching the expression’s value against a series of **case clauses**, and executes statements after the **first case** clause with a matching value, until a **break** statement is encountered.
  - **The default clause** of a switch statement will be jumped to if **no case** matches the expression’s value.

  - Exam:

    ```js
        switch (expression) {
        case value1:
            //Statements executed when the result of expression matches value1
            break;
        case value2:
            //Statements executed when the result of expression matches value2
            break;
        ...
        case valueN:
            //Statements executed when the result of expression matches valueN
            break;
        default:
            //Statements executed when none of the values match the value of the expression
            break;
        }
    ```

## Exception Handling:

- In JavaScript, we can use exceptions to handle runtime errors and abnormal situations in our code.
- Throwing **exceptions** allows we to **interrupt the normal** flow of our program and provide a mechanism for handling errors gracefully. Here's how you can **throw exceptions** in JavaScript:

  1. **Using the throw Statement:**
     - The throw statement is used to explicitly throw an exception. You can throw any value as an exception, but it's common to throw an instance of the Error object or its subclasses.

  Exam:

  ```js
  // Throwing a generic Error
  throw new Error("This is an error message");

  // Throwing a custom error
  class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyCustomError";
    }
  }

  throw new MyCustomError("Custom error message");
  ```

2.  **Catching Exceptions with try...catch:**

- We can **catch and handle exceptions** using the **try...catch** statement. Code inside the try block is executed, and if an exception is thrown, it's caught and handled in the **catch block**.
  ```js
  try {
    // Code that might throw an exception
    throw new Error("An error occurred");
  } catch (error) {
    // Handle the exception
    console.error(error.message);
  }
  ```

3. **Finally Block (Optional):**

- We can optionally include a finally block after **the try and catch blocks**. Code inside the finally block is **always executed**, regardless of whether an exception was thrown or caught.
  ```javascript
  try {
    // Code that might throw an exception
    throw new Error("An error occurred");
  } catch (error) {
    // Handle the exception
    console.error(error.message);
  } finally {
    // This code always runs
    console.log("Finally block executed");
  }
  ```

4. **Custom Error Types:**

- We can **create custom error** types by _extending_ **the Error object** or **its subclasses**.

- This allows we to provide more context-specific information in **our error messages.**

  ```js
  class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyCustomError";
    }
  }

  try {
    throw new MyCustomError("Custom error message");
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
  ```

- **Throwing and catching exceptions** is a **_fundamental part of error handling_** in JavaScript. It helps we write robust and reliable code that gracefully handles unexpected situations and provides useful feedback when errors occur.

## Expressions and Operators:

### Arithmetic operators

- The Arithmetic operators perform **addition, subtraction, multiplication, division, exponentiation, and remainder operations.**

- Arithmetic operators in JavaScript are as follows:

- (Addition): **+**

* (Subtraction): **-**

- (Multiplication): **\***
- (Exponentiation) : **\*\***

- (Division): **/**
- (Modulus i.e. Remainder): **%**
- (Increment): **++**
- (Decrement): **--**

### Comparison Operators

- **Comparison operators** are the operators that compare values and **return true or false**.
- The operators include: >**, <, >=, <=, ==, ===, != and !==**

### Conditional operators

- Conditional operator also known as **Ternary operator** is the only JS operator that takes three operands.

- The operator can have one of two values based on a condition.

- **Syntax:**

  ```js
  condition ? val_for_true : val_for_false;
  ```

## "This" in JavaScript:

- In JavaScript, the this keyword refers to an object.

- Which object depends on how this is being invoked (used or called).

- The this keyword refers to different objects depending on how it is used:

  - In an **object method**, **this** refers to the object.

  - **Alone**, **this** refers to **the global object**.

  - **In a function**, **this** refers to the **global object**.

  - **In a function**, in strict mode, this is undefined.

  - **In an event**, **this** refers to the **element that received the event**.

  - Methods like **call(), apply(), and bind()** can refer this to any object.

<span style="color: yellow; font-size: 24px">Note:</span>

- <span style="color: red; font-size: 18px">this: </span> is not a variable. It is a keyword. You cannot change the value of <span style="color: red; font-size: 18px">this</span>.

### 1. This in a Method:

- When used in an object method, this refers to **the object**.

- In the example on top of this page, this refers to the person object.

- Because the fullName method is a method of the person object.

- **Exam:**

  ```js
  fullName : function() {
  return this.firstName + " " + this.lastName;
  }
  ```

### 2. This Alone

- When used alone, this refers to **the global object.**

- Because this is running in **the global scope**.

- In a browser window the global object is **[object Window]:**

### 3. This in a Function (Default)

- **In a function**, the global object is the default **binding for this**.

- **In a browser window** the global object is **[object Window]**:

- **Exam:**
  ```js
  function myFunction() {
    return this;
  }
  ```

### 4. This in a Function (Strict)

- JavaScript strict mode does not allow default binding.

- So, when used in a function, in strict mode, this is **undefined**.

- Exam:
  ```js
  "use strict";
  function myFunction() {
    return this;
  }
  ```

### 5. this in Event Handlers

- **In HTML event handlers**, this refers to the HTML element that **received the event** :

- Example

  ```js
  <button onclick="this.style.display='none'">Click to Remove Me!</button>
  ```

  <button onclick="this.style.display='none'">Click to Remove Me!</button>

### 6. Object Method Binding

- In these examples, this is the person object:

- **Exam :**
  ```js
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
      return this;
    },
  };
  ```

## Asynchronous JavaScript:

### 1. Callback in JavaScript

- In JavaScript, a callback is a function that is **passed as an argument to another function** and is intended to be executed after the completion of that function.

- Callbacks are commonly used for **handling asynchronous** operations, such as making **network requests, reading files, or waiting for user interactions**.
- They allow you to **specify** what should happen once a particular task or operation is finished.

- Exam:

  ```js
  function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Async operation complete");
      callback(); // Execute the callback function
    }, 1000); // Simulate an asynchronous operation that takes 1 second
  }

  function handleCompletion() {
    console.log("Callback executed");
  }

  doSomethingAsync(handleCompletion); // Pass the callback function
  ```

  - In this example:

  - We have a function **doSomethingAsync** that simulates an asynchronous operation using setTimeout. It takes a callback parameter.

  - **The handleCompletion function** is defined as a callback. It specifies what to do when the asynchronous operation is complete.

  - We call **doSomethingAsync** and pass **handleCompletion** as the callback function. When the asynchronous operation is complete (after 1 second), it calls the handleCompletion function.

- Callbacks are a fundamental concept in JavaScript, especially when dealing with events, timers, or any task that doesn't execute immediately.
- While callbacks are powerful, they can lead to **callback hell (nested callbacks)** when dealing with complex asynchronous operations.

### 2. Callback Hell

- The callback hell is when we try to write asynchronous JavaScript in a way where execution happens visually from top to bottom, **creating a code that has a pyramid shape with many** **"})"** at the end.

- Exam for Callback Hell:
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg" width="100%" height="300" title="hover text">

### 3. Promises

- **Promises** are a much better way to work with asynchronous code in JavaScript than the old and error-prone callback approach.
- They were introduced into JavaScript with ECMAScript 6.
- Using promises, we can manage extremely complex asynchronous code with rigorous error-handling setup, write code in a more or less synchronous style, and keep ourselves from running into the so-called callback hell.

#### - A Promise can be in **one of three states**:

- **Pending**: The initial state, before the operation is completed or rejected.
- **Fulfilled (Resolved)**: The operation completed successfully, and the Promise holds the resulting value.
- **Rejected**: The operation encountered an error, and the Promise holds the reason for the failure.

#### - Basic example of creating and using _a Promise_:

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      // Resolve the Promise with the data
      resolve(data);
      // or Reject the Promise with an error
      // reject(new Error("Data not available"));
    }, 1000); // Simulate a 1-second delay
  });
};

// Using the Promise
fetchData()
  .then((result) => {
    console.log("Data fetched successfully:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

- In this example:

  - We create a Promise that represents an asynchronous operation (fetching data).

  - Within the Promise constructor, we use **resolve** to indicate **successful completion** and **reject to indicate failure**.

  - We use **.then()** to specify what to do when **the Promise is resolved** (successful completion) and **.catch()** to handle any **errors**.

  - When the **asynchronous** operation is complete, we either **call resolve**(data) to fulfill the Promise with data or reject(error) to reject it with an error.

### async/await in JavaScript

- Async/await is a feature introduced in ECMAScript 2017 (ES8) that provides a more readable and concise way to work with **asynchronous** code in JavaScript.
- It allows we to write **asynchronous** code that looks and behaves more like synchronous code, **making it easier to understand and maintain.**

#### async/await works:

##### 1. **Async Function:**

- An async function always **returns a Promise**, even if it doesn't explicitly use the Promise constructor.

##### 2. **Await Operator:**

- Within an async function, we can use the **await keyword** to **pause** the execution of the function until a **Promise is resolved**.

- When await is used, the function **doesn't continue** until the **awaited Promise either resolves** with a value or rejects with an error.

#### Basic example of async/await

```js
async function fetchData() {
  try {
    // Simulate an asynchronous operation (e.g., fetching data)
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John", age: 30 });
      }, 1000); // Simulate a 1-second delay
    });

    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Using the async function
fetchData();
```
