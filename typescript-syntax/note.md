# TypeScript

## Install and Configure :

- To install and configure TypeScript in your project, we need to perform the following steps:

  - Initialize npm in your project directory by running the following command:

    ```js
        npm init
    ```

  - **Install TypeScript** as a project dependency by running the following command:

    ```js
        npm install --save-dev typescript
    ```

  - Create a **tsconfig.json** file in your project directory to specify the compiler options for building your project. For example:
    ```js
        {
            "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "strict": true,
            "outDir": "./dist",
            "rootDir": "./src"
            },
            "exclude": ["node_modules"]
        }
    ```
  - Compile your TypeScript code using the following command:

    ```js
    tsc;
    ```

## <span style="color: yellow; font-size: 24px">Note:</span>

- We can also compile individual TypeScript files by specifying the file name after the tsc command.

  - Exam:

    ```js
    tsc index.ts

    ```

## tsconfig.json

- **tsconfig.json** is a configuration file in TypeScript that specifies the compiler options for building your project.

- It helps the TypeScript compiler understand the structure of your project and how it should be **compiled to JavaScript**.

  ### Some common options include:

  - **target:** the version of JavaScript to compile to.
  - **module:** the module system to use.
  - **strict:** enables/disables strict type checking.
  - **outDir:** the directory to output the compiled JavaScript files.
  - **rootDir:** the root directory of the TypeScript files.
  - **include:** an array of file/directory patterns to include in the compilation.
  - **exclude:** an array of file/directory patterns to exclude from the compilation.

        ### Example configuration _tsconfig.json_ file:

    ```js
    {
        "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./src",
        },
        "exclude": ["node_modules"],
        "include": ["src"]
    }
    ```

## Typescript Types

### Type Assertions

- **Type assertions** in TypeScript are a way to tell the compiler to treat a value as a specific type, regardless of its inferred type.

- There are **two syntaxes** for type assertions in TypeScript:

  - The **“angle-bracket”** syntax: **< T > value**

  - The **“as”** syntax: value as **T**

#### For example:

```ts
let num = 42;
// using angle-bracket syntax
let str = <string>num;
// using as syntax
let str2 = num as string;
```

- In both examples, **num is a numbe**r, but the type assertions tell the compiler to treat the value as a string.

#### 1. As Const

- As **const** is a type assertion in TypeScript that allows we to **assert that an expression** has a specific type, and that its value should be treated as a read-only value.

- For example:

  ```js
      const colors = ['red', 'green', 'blue'] as const;
  // colors is now of type readonly ['red', 'green', 'blue']
  ```

- Using **as const** allows **TypeScript** to **infer** more accurate types for **constants**, which can lead to improved type checking and better type inference in your code.

#### 2. As Type

- As is a type assertion in TypeScript that allows you to tell the compiler to treat a value as a specific type, regardless of its inferred type.

- Exam:

  ```js
      let num = 42;
      let str = num as string;
      // str is now of type string, even though num is a number
  ```

#### 3. As Any

- Any is a **special type** in TypeScript that **represents** a value of any type. When a value is declared with the any type, the compiler will not perform any type checks or type inference on that value.

- For example:

  ```js
  let anyValue: any = 42;

  // we can assign any value to anyValue, regardless of its type
  anyValue = "Hello, world!";
  anyValue = true;
  ```

### 4. Non Null Assertion :

- **The non-null** assertion **operator (!)** is a type assertion in TypeScript that allows you to tell the compiler that a **value will never be null or undefined**.

## Narrowing:

- Type guards are a way to **narrow down** the type of a variable.

- This is useful when we want to do something different depending on the type of a variable.

  ### 1. typeof Operator:

  - The **typeof operator** is used to check the type of a variable.

  - It **returns a string value** representing the type of the variable.

    ```ts
    let value: string | number = "hello";

    if (typeof value === "string") {
      console.log("value is a string");
    } else {
      console.log("value is a number");
    }
    ```

  ### 2. instanceOf operator:

  - The **instanceof operator** is a way to narrow down the type of a variable. It is used to **check** if an object is an **instance of a class**.

    - Exam:

    ```ts
    class Bird {
      fly() {
        console.log("flying...");
      }
      layEggs() {
        console.log("laying eggs...");
      }
    }

    const pet = new Bird();

    // instanceof
    if (pet instanceof Bird) {
      pet.fly();
    } else {
      console.log("pet is not a bird");
    }
    ```

## Combining Types :

- In TypeScript, we can **combine types** using **type union and type intersection.**

  ### Type Union:

  - The **union operator** **|** is used to combine two or more types into a single type that represents all the possible types.

  - **Example:**

    ```ts
    type stringOrNumber = string | number;
    let value: stringOrNumber = "hello";

    value = 42;
    ```

  ### Type Intersection:

  - **The intersection operator &** is used to intersect two or more types into asingle type that represents the properties of all the types.

  - **Example:**

    ```ts
    interface A {
      a: string;
    }

    interface B {
      b: number;
    }

    type AB = A & B;
    let value: AB = { a: "hello", b: 42 };
    ```

  ### Type Aliases:

  - **A Type Alias** in TypeScript allows you to **create a new name** for a type.

  - **Exam:**

    ```ts
    type Name = string;

    type Age = number;
    type User = { name: Name; age: Age };

    const user: User = { name: "John", age: 30 };
    ```

  - **In the example** above, **Name and Age** are type aliases for string and number respectively.
  - And User is a type alias for an object with properties name of type **Name** and age of type **Age**.

  ### Keyof Operator:

  - **The keyof operator** in TypeScript is used to get the **union of keys** from an object type.

  - Exam :

    ```ts
    interface User {
      name: string;
      age: number;
      location: string;
    }

    type UserKeys = keyof User; // "name" | "age" | "location"
    const key: UserKeys = "name";
    ```

  - In this example, **UserKeys** is a type that represents the union of keys from the **User interface**, which is **"name" | "age" | "location"**. And a constant named key with the type **UserKeys** is declared with the value **"name"**.

  ### TypeScript Functions:

  - Functions are a core building block in TypeScript.
  - Functions allow you to wrap a piece of code and reuse it multiple times.
  - Functions in TypeScript can be either declared using function declaration syntax or function expression syntax.

    #### Function Declaration Syntax:

    ```ts
        function name(param1: type1, param2: type2, ...): returnType {
        return value;
        }
    ```

    #### Function Overloading:

    - Function Overloading in TypeScript allows **multiple functions with the same name** but with **different parameters** to be defined.

    - The correct function to call is determined based on **the number, type, and order** of the arguments passed to the function at runtime.

    - Exam:

      ```ts
      function add(a: number, b: number): number;
      function add(a: string, b: string): string;

      function add(a: any, b: any): any {
        return a + b;
      }

      console.log(add(1, 2)); // 3
      console.log(add("Hello", " World"));
      ```

## TypeScript Interfaces:

- In TypeScript, both **types and interfaces** can be used to **define the structure of objects** and enforce type checks.

- However, there are some differences between the two.

  - **Types** are used to **create a new named type** based on an existing type or to combine existing types into a new type.

  - They can be created using the type keyword.

    - **Example:**

      ```ts
      type Person = {
        name: string;
        age: number;
      };

      const person: Person = {
        name: "John Doe",
        age: 30,
      };
      ```

  - **Interfaces**, on the other hand, are used to describe the structure of objects and classes.

  - They can be created using the **interface keyword**.

    - **Example:**

      ```ts
      interface Person {
        name: string;
        age: number;
      }

      const person: Person = {
        name: "John Doe",
        age: 30,
      };
      ```

## Extending Interfaces:

- In **TypeScript**, we can **extend** an interface by creating a new interface that **inherits** from the original interface using the **“extends” keyword.**

- The **new interface** can include additional properties, methods, or redefine the members of the original interface.

  - **Exam:**

    ```ts
    interface Shape {
      width: number;
      height: number;
    }

    interface Square extends Shape {
      sideLength: number;
    }

    let square: Square = {
      width: 10,
      height: 10,
      sideLength: 10,
    };
    ```

    - **In this example**, the **Square interface** extends the **Shape interface** and adds an additional property sideLength.

    - A variable of type Square **must have all the properties defined** in both **Shape and Square interfaces**.

## Interface Declaration:

- **An interface** in TypeScript is **a blueprint(bản vẽ thiết kế)** for creating objects with **specific structure**.

- **An interface** defines a set of **properties, methods, and events** that a **class or object** must implement.

- **The interface** is a contract between objects and classes and can be used to enforce a specific structure for objects in your code.

  - Exam:

    ```ts
    interface Person {
      firstName: string;
      lastName: string;
      age?: number;

      getFullName(): string;
    }
    ```

    - The **Person interface** defines four properties: firstName, lastName, age, and a method getFullName().

    - The age property is **optional**, indicated by **the ? symbol**.

    - Any class or object that implements the Person interface **must have these properties and method**.

## Generics:

- Generics in TypeScript are a way to write code that can work with multiple data types, instead of being limited to a single data type.

- Generics allow we to **write functions, classes, and interfaces** that take **one or more** type parameters, which act as placeholders for the actual data types that will be used when **the function, class, or interface is used**.

  ```ts
  function identity<T>(arg: T): T {
    return arg;
  }
  let output = identity<string>("Hello"); // type of output will be 'string'
  ```

## Utility Types

- TypeScript provides several **utility types** that can be used to **manipulate** and **transform** existing types.

- Here are some of the most common ones:

  1. **Partial<T>:** Creates a new data type by making **all properties of type T optional** (not required).

     ```typescript
     interface Person {
       name: string;
       age: number;
     }

     type PartialPerson = Partial<Person>;

     const partialPerson: PartialPerson = { name: "Alice" }; // age is optional
     ```

  2. **Required<T>:** Creates a new data type by making **all properties of type T required**.

     ```typescript
     interface PartialPerson {
       name?: string;
       age?: number;
     }

     type RequiredPerson = Required<PartialPerson>;

     const requiredPerson: RequiredPerson = { name: "Alice", age: 30 }; // Both name and
     ```

  3. **Readonly<T>:** Creates a new data type by making **all properties of type T read-only.**

     ```ts
     interface Book {
       title: string;
       author: string;
     }

     type ReadonlyBook = Readonly<Book>;

     const book: ReadonlyBook = { title: "The Book", author: "John Doe" };
     // You cannot change book.title or book.author
     ```

  4. **Record<K, T>:** Creates a data type that describes **a list of properties with type T for each property named K**.

     ```ts
     type Fruit = "apple" | "banana" | "cherry";
     type FruitPrices = Record<Fruit, number>;

     const fruitPrices: FruitPrices = { apple: 1, banana: 2, cherry: 3 };
     ```

  5. **Pick<T, K>:** Creates a new data type by **selecting specific properties from type T**.

     ```ts
     interface Person {
       name: string;
       age: number;
       address: string;
     }

     type PersonBasicInfo = Pick<Person, "name" | "age">;

     const personBasicInfo: PersonBasicInfo = { name: "Alice", age: 30 };
     ```

  6. **Omit<T, K>:** Creates a new data type by **excluding specific properties from type T**.

     ```ts
     interface Person {
       name: string;
       age: number;
       address: string;
     }

     type PersonWithoutAddress = Omit<Person, "address">;

     const personWithoutAddress: PersonWithoutAddress = {
       name: "Bob",
       age: 25,
     };
     ```

  7. **ReturnType:** Return type constructs a type consisting of the **return type of function Type**.

  8. **Non Nullable:** Non-Nullable constructs a type by **excluding null and undefined from Type**.

     ```ts
     type T0 = NonNullable<string | number | undefined>;

     // type T0 = string | number

     type T1 = NonNullable<string[] | null | undefined>;
     // type T1 = string[]
     ```

## Advanced Types in TS :

- In TypeScript, "Advanced Types" refers to a set of more **complex and powerful type** constructs that go beyond basic types like numbers and strings.

- These advanced types enable you to **express more intricate** type **relationships, conditional type logic, and manipulate types** in various ways to make your code more precise and safer.

- **Here are some commonly used advanced types in TypeScript**:

  1. **Union Types:** Union types allow we to declare a variable that can have **one of several specified types**.

     - **Exam:**
       ```ts
       let value: string | number;
       value = "Hello"; // Valid
       value = 42; // Valid
       ```

  2. **Intersection Types:** Intersection types **combine multiple types into one**. The resulting type will **have all the properties and methods of the combined types**.

  - **Exam:**

    ```ts
    interface Person {
      name: string;
    }

    interface Address {
      address: string;
    }

    type PersonWithAddress = Person & Address;
    ```

  3. **Type Aliases:** Type aliases allow you to create custom, reusable types. They are especially useful for complex types or types that are used in multiple places.

     ```ts
     type Point = { x: number; y: number };
     ```

  4. **Mapped Types:** Mapped types allow we to **transform or map** over the properties of an existing type to create a new type.

     ```ts
     type Readonly<T> = {
       readonly [P in keyof T]: T[P];
     };

     type Person = {
       name: string;
       age: number;
     };

     type ReadonlyPerson = Readonly<Person>;
     ```

  5. **Conditional Types:** Conditional types allow we to **express type relationships based on conditions**. We are often used in generic types.

     ```ts
     type IsString<T> = T extends string ? true : false;
     type StrOrNum = IsString<"Hello">; // true
     ```

  6. **Indexed Access Types:** Indexed access types allow we to **access a property of a type** by specifying its key.

     ```ts
     type Person = {
       name: string;
       age: number;
     };

     type Age = Person["age"]; // number
     ```

  7. **Tuple Types:** Tuple types **represent arrays with a fixed number of elements**, where **each element can have its own type**.

     ```ts
     let tuple: [string, number];
     tuple = ["Alice", 30]; // Valid
     ```

  8. **Nullable Types:** We can use **null and undefined** in type annotations to represent nullable types.

     ```ts
     let maybeNumber: number | null = null;
     ```

## Modules :

- In TypeScript, modules are used to **organize and reuse code**.

- There are two types of modules in TypeScript:

  - Internal

  - External

- **Internal modules** are used to organize code within a file and are also referred to as namespaces. They are defined using the “namespace” keyword.

- **External modules** are used to organize code across multiple files. They are defined using the **“export” keyword** in one file and the **“import” keyword** in another file. External modules in TypeScript follow the CommonJS or ES modules standards.

- Exam:

  ```js
      namespace MyModule {
      export function doSomething() {
        console.log('Doing something...');
      }
      }
      // main.ts
      /// <reference path="myModule.ts" />
      MyModule.doSomething(); // Output: "Doing something..."
  ```

#### External Modules

- **In TypeScript**, **external modules** allow you to **organize and share code** across multiple files. External modules in TypeScript follow the CommonJS or ES modules standards.

- Here’s an example of how you can use external modules in TypeScript:

  ```js
  // myModule.ts
  export function doSomething() {
    console.log("Doing something...");
  }

  // main.ts
  import { doSomething } from "./myModule";
  doSomething(); // Output: "Doing something..."
  ```

- **In this example**, we use the **“export”** keyword in the **“myModule.ts”** file to **export the “doSomething” function**, making it available for other files to use.

## Namespaces

- **In TypeScript**, namespaces are used to **organize and share** code across multiple files. Namespaces allow you to group related functionality into a single unit and prevent naming conflicts.

  ```ts
  namespace MyNamespace {
    export function doSomething() {
      console.log("Doing something...");
    }
  }

  // main.ts
  /// <reference path="myNamespace.ts" />
  MyNamespace.doSomething();
  ```

- **In this example**, we use the namespace keyword in the **“myNamespace.ts”** file to define a namespace **“MyNamespace”**. Within the namespace, we export a function **“doSomething”**.
