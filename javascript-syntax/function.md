# Functions:

- **Functions** exist so we can reuse code.
- They are blocks of code that **execute** whenever they are **invoked**.
- Each function is typically written to **perform a particular task**, like an addition function used to find the sum of two or more numbers.
- When numbers need to be added anywhere within your code, the addition function can be invoked as many times as necessary.

## The main types of functions in JavaScript:

### 1. Named Functions:

- Named functions have a name identifier and are defined using the **function** keyword.

- They can be used anywhere in the code, even before they are declared (hoisting).

- They are often used for reusable blocks of code.

  ```js
  function add(a, b) {
    return a + b;
  }
  ```

### 2. Anonymous Functions:

- Anonymous functions do not have a name identifier.

- They are **often used as arguments** to other functions or assigned to variables.
- Commonly used for **one-time or inline functions**.

  ```javascript
  const multiply = function (a, b) {
    return a * b;
  };
  ```

### 3. Arrow Functions (ES6):

- Arrow functions provide a more concise syntax for writing functions.

- They do not have their own **this** context (they inherit the this from the surrounding code).

- Arrow functions are often used for short and simple functions.

  ```javascript
  const square = (x) => x * x;
  ```

### 4. Immediately Invoked Function Expressions (IIFE):

- IIFE is an **anonymous function** that is executed immediately after being defined.

- It helps create a private scope for variables and prevent polluting the global scope.

  ```javascript
  (function () {
    // Your code here
  })();
  ```

### 5. Higher-Order Functions:

- **Higher-order functions** are functions that take one or more functions as arguments or return a function as their result.

- They are commonly used for functional programming techniques like m**ap, filter, and reduce**.
- Exam:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((x) => x * 2);
  ```

### 6. Constructor Functions:

- Constructor functions are used to create instances of objects.
- They are defined with an initial capital letter and typically use the new keyword to create objects.
- **Exam:**

  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  ```

  ```js
  const person1 = new Person("Alice", 30);
  ```

## Function scope:

- Variables defined inside a function **cannot be accessed** from anywhere outside the function, because the variable is defined only in the scope of the function.

- However, a function can access all variables and functions defined inside the scope in which it is defined.

- In other words, a function defined in the global scope can access all variables defined in the global scope.

- A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

## Lexical scope

- Lexical scoping, also known as "static scoping" or "lexical closure," is an important principle in programming languages for **determining the scope** of variables in a program.

- Lexical scoping is based on defining scope based on the lexical structure of the source code **at compile time**, **independent** of program execution.

#### **In lexical scoping:**

- Variables are looked up based on where they are **defined** (lexical structure):
- When we access a variable within a scope, the compiler determines the scope of the variable based on the static (lexical) structure of the source code. **This means that** the variable is searched for within the scope where it is defined or within enclosing scopes based on the lexical structure of the source code.

- **Nested functions** can access variables of their enclosing functions:

  - If a nested function is defined inside another function, it can access the variables of the enclosing function, and these variables are referred to as "closures."

  - These variables retain their values even after the enclosing function has completed execution.

The following JavaScript example illustrates lexical scoping:

- Exam:

  ```js
  function outer() {
    const x = 10;

    function inner() {
      console.log(x); // inner can access the x variable of outer
    }

    inner();
  }

  outer(); // Output: 10
  ```

- In this example, the inner function **can access** the x variable of the outer function because it is defined within the scope of outer. This is an example of lexical scoping, where the scope of a variable is determined by the lexical structure of the source code at compile time.

## Closures in JavaScript

- A closure in JavaScript **is a function** that has access to variables from its containing (enclosing or outer) function's scope, even after the outer function has finished executing.
- In other words, a closure "closes over" the variables in its lexical scope, allowing those variables to remain accessible and unchanged to the inner function, even when the outer function has completed its execution.

- Closures are a powerful and fundamental concept in JavaScript, and they enable several important programming patterns and techniques. Here's a breakdown of closures in JavaScript:

#### 1. **Access to Outer Scope Variables**:

- When a function is defined inside another function, it has access to all the variables and parameters of the outer function. This allows we to create functions that "remember" values from their containing scope.

- Exam:

  ```js
  function outer() {
    const message = "Hello";

    function inner() {
      console.log(message); // inner has access to the message variable from outer
    }

    return inner;
  }

  const myFunction = outer();
  myFunction(); // Output: "Hello"
  ```

#### 2. Data Encapsulation:

- **Closures** provide a way to **encapsulate data(đóng gói dữ liệu)** by **keeping it private** within a function's scope.
- This is often used in JavaScript for **creating private variables** and functions that are **inaccessible** from outside the closure.

- Exam:

  ```javascript
  function createCounter() {
    let count = 0;

    return function () {
      return ++count;
    };
  }

  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  ```

#### 3. Callbacks and Functional Programming:

- Closures are commonly used in JavaScript for **creating callbacks** and working with **higher-order functions**.

- Callback functions often **capture values** from their surrounding context (closure) to perform specific tasks.
- Exam:
  ```js
  function fetchData(url, callback) {
    fetch(url).then((data) => {
      callback(data); // callback captures the data variable from its enclosing scope
    });
  }
  ```

#### 4. Module Pattern:

- Closures can be used to **implement the module pattern**, allowing we to create private and public members in a module and control their access.

- Exam:

  ```javascript
  const myModule = (function () {
    let privateData = "I'm private";

    function privateFunction() {
      console.log(privateData);
    }

    return {
      publicFunction: function () {
        privateFunction();
      },
    };
  })();

  myModule.publicFunction(); // Output: "I'm private"
  ```

### Sumary:

- Closures play a critical role in JavaScript's ability to manage scope and state, making them a powerful tool for creating organized, modular, and functional code.

## Function Borrowing:

- Method borrowing, also known as function borrowing, is, as its name implies, **a way for an object to use the methods of another object without redefining that same method.**

- In JavaScript, we can **reuse** the method of a function on a different object other than the object it was defined on.
- Method borrowing helps to keep us from having to write the same code multiple times.
- Using the predefined JavaScript methods, **call(), apply() or bind()**, we can borrow methods from other objects without inheriting their properties and methods.

### The JavaScript call() Method:

- **The call()** method is a **predefined JavaScript method.**

- It can be used to **invoke (call)** a **method** with an owner object as an **argument (parameter).**

<span style="color: yellow; font-size: 24px">Note:</span>

- With **call()**, an object can use a method belonging to another object.

  - This example calls the fullName **method of person**, using it on **person1**:

  ```js
  const person = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };
  const person2 = {
    firstName: "Mary",
    lastName: "Doe",
  };

  // This will return "John Doe":
  person.fullName.call(person1);
  ```

### The JavaScript _apply()_ Method

- The **apply()** method is **similar** to the **call()** method.

- <span style="color: yellow; font-size: 20px"> The Difference Between call() and apply()</span>

  - The **call()** method takes arguments **separately**.

  - The **apply()** method takes arguments **as an array**.

- Exam:

  ```js
  const person = {
    fullName: function (city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
  };

  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  person.fullName.call(person1, "Oslo", "Norway");
  ```

### JavaScript Function _bind()_:

- With the **bind()** method, an object can borrow a method from another object.

  ### 1. Preserving this

  - Sometimes **the bind()** method has to be used to **prevent** losing **this**.

  - In the following example, the person object has a getFullName method. In the getFullName method, this refers to the person object:

    ```js
    const person = {
      firstName: "John",
      lastName: "Doe",
      getFullName: function () {
        console.log(`FullName: ${this.firstName} ${this.lastName}`);
      },
    };
    person.getFullName();
    ```

  - When a function is used as a callback, this is lost.

  - This example will try to display the person name after 3 seconds, but it will display undefined instead:

    ```js
    const person = {
      firstName: "John",
      lastName: "Doe",
      display: function () {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
      },
    };

    setTimeout(person.display, 3000);
    ```

- **The bind()** method solves this problem.

- In the following example, **the bind()** method is used to **bind** person.display to person.

- This example will display the person name after 3 seconds:

  ```js
  const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    },
  };

  let display = person.display.bind(person);
  setTimeout(display, 3000);
  ```
