<span style="color: #087ea4; font-size: 40px"> React JS</span>

## 1. What's ReactJs ?

**Answer:** The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than we would with vanilla JavaScript.

## 2. Virtual DOM:

### . What's Virtual DOM?

**Answer:** The Virtual DOM is a crucial part of React's design for optimizing UI updates. It ensures that changes to the UI are efficient and minimizes the amount of work required to keep the web application in sync with its underlying state. This approach contributes to React's reputation for high performance and developer productivity.

### + How the Virtual DOM works:

**Answer:** When we make changes to our React application's state, React doesn't immediately update the Real DOM. Instead, it first updates the Virtual DOM.
React then compares the updated Virtual DOM with the previous version of the Virtual DOM (which it keeps track of).
React identifies the differences or "diffs" between the new and old Virtual DOM representations. This process is called "reconciliation."

### + Benefits of the Virtual DOM:

1. Performance: By minimizing direct manipulation of the Real DOM, React can optimize updates and reduce unnecessary re-renders.
2. Cross-platform: The Virtual DOM abstraction allows React to work seamlessly across different browsers and platforms.
3. Developer-friendly: Developers can work with a simpler, more predictable API, as they don't need to manually manipulate the Real DOM.

## 3. What is JSX?

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.

## 4. Props vs State

- Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of component render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

### + Props:

- Props are read-only.
- Props can not be modified.
- React Props are like function arguments in JavaScript and attributes in HTML.
- To send props into a component, use the same syntax as HTML attributes.

  #### Example:

  - Add a "brand" attribute to the Car element:

    ```js
    const myElement = <Car brand="Ford" />;
    ```

  - The component receives the argument as a props object:

  #### Example:

  - Use the brand attribute in the component:

    ```js
    function Car(props) {
      return <h2>I am a {props.brand}!</h2>;
    }
    ```

### + State:

- State refers to an internal data storage **mechanism(cơ chế)** that allows components to store and manage their our data.
- State is **a critical concept(khái niêm quan trọng)** in React because it enables components to react to user **interactions(phản ứng)**, data changes, and other events, ultimately leading to dynamic and interactive user interfaces.

1. **Component-Specific Data:** State is used to manage data that is specific to a particular component. Each component can have its our state, allowing it to maintain and update data independently.

2. **Mutable:** Unlike props (which are immutable and passed from parent to child components), state is mutable and can be modified by the component that our it. We can change the state of a component using the **setState** method provided by <span style="color: #087ea4; font-size: 18px; font-weight:700"> React </span>.

3. **Initialization**: State is typically initialized in the component's constructor. **In functional components**, you can use the **useState** hook to initialize and manage state.

4. **Reactive Updates:** When the state of a component changes, React automatically re-renders the component to reflect the updated state. This **reactivity(khả năng phản ứng)** is a core feature of React and is what makes it possible to build dynamic and responsive user interfaces.

5. **Local Scope:** State is local to the component that defines it, meaning it is not accessible from other components. This encapsulation helps in **isolating(cô lập)** and managing component-specific data.

6. **Asynchronous Updates:** Updates to state using **setState** are asynchronous in **nature(bản chất)**. React batches multiple setState calls for performance reasons, so you should not rely on the immediate value of state after calling setState.

7. **Functional Components:** In modern React, functional components can also have state using the **useState hook**. This allows functional components to manage local state, making them more powerful and easier to understand.

## 5. React Lifecycle:

  <img src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png" width="100%" height="600" title="hover text">

- In **React function components**, we can achieve similar lifecycle behavior to class components by using **React hooks** .
- Hooks were introduced in React 16.8 to allow function components to manage state and side effects, and they also provide lifecycle-like behavior.

1.  **Component Did Mount (equivalent):** In class components, **componentDidMount** is called after the component has been inserted into the DOM. In a function component, you can achieve this behavior using **the useEffect** hook with an empty dependency array:

    - Exam:

    ```js
    function MyComponent() {
      useEffect(() => {
        // This code runs after the component has been mounted
        console.log("Component did mount");
        // You can perform side effects here
        return () => {
          // This code runs before the component unmounts
          console.log("Component will unmount");
          // You can clean up any side effects here
        };
      }, []); // Empty dependency array means it only runs once, like componentDidMount
      // ...
    }
    ```

2.  **Component Did Update (equivalent):** The equivalent to **componentDidUpdate** in a function component is achieved by using useEffect with a dependency array. The code within the useEffect callback will run whenever any of the dependencies change.

    - Exam:

    ```js
    function MyComponent(props) {
      const [data, setData] = useState(props.initialData);

      useEffect(() => {
        // This code runs whenever `data` or `props.someProp` changes
        console.log("Component did update");
        // You can perform side effects here
      }, [data, props.someProp]);
      // ...
    }
    ```

3.  **Component Will Unmount (equivalent):** Cleaning up when a component is about to unmount is also possible with the useEffect hook. You can return a cleanup function, which is similar to componentWillUnmount.

    - Exam:

    ```js
    function MyComponent() {
      useEffect(() => {
        console.log("Component did mount");

        return () => {
          console.log("Component will unmount");
          // You can clean up any side effects here
        };
      }, []);
      // ...
    }
    ```

## 6. Conditional rendering in ReactJS:

- Conditional rendering in ReactJS allows we to control what is displayed in our component based on certain conditions or logic. We can use various methods and techniques to conditionally render content in your React components. Here are some common approaches:

1.  **Using Conditional Statements:** We can use regular JavaScript conditional statements like **if, else**, and the ternary operator **? :** to conditionally render content based on the component's state or props.

    - Exam:

    ```js
    function MyComponent({ isLoggedIn }) {
      return (
        <div>{isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}</div>
      );
    }
    ```

2.  **Using Logical && Operator:** We can use the logical **&&** operator to conditionally render content if a condition is <span style="color: red">true</span>. This is often used for simple conditional rendering.

    - Exam:

      ```js
      function MyComponent({ isLoading, data }) {
        return (
          <div>
            {isLoading && <p>Loading...</p>}
            {data && <p>Data: {data}</p>}
          </div>
        );
      }
      ```

3.  **Using Ternary Operator:** The ternary operator is a **concise way(cách ngắn gọn)** to conditionally render content based on a condition.

    - Exam:

      ```js
      function MyComponent({ isLoggedOut }) {
        return (
          <div>
            {isLoggedOut ? <button>Log In</button> : <button>Log Out</button>}
          </div>
        );
      }
      ```

4.  **Using Conditional Rendering Functions:** We can create separate functions or components to handle the conditional rendering logic, making our code more readable and maintainable.

    - Exam:

      ```js
      function WelcomeMessage({ isLoggedIn }) {
        return <p>Welcome, {isLoggedIn ? "User" : "Guest"}!</p>;
      }

      function MyComponent({ isLoggedIn }) {
        return (
          <div>
            <WelcomeMessage isLoggedIn={isLoggedIn} />
          </div>
        );
      }
      ```

## 7. Composition in ReactJs:

- **In ReactJs**, **"Composition"** refers to the practice of building complex user interfaces by combining or composing smaller, reusable components. **Composition** is one of the fundamental principles in React, allowing developers to create UIs that are modular, maintainable, and easy to reason about.

- **_Key points about composition in React:_**

  1. **Modularity:** Composition encourages breaking down user interfaces into smaller, **self-contained(khép kín)** components. Each component is responsible for a specific piece of the UI or a particular functionality. This modularity makes it easier to manage and maintain the codebase.

  2. **Reusability(khả năng tái sử dụng):** React components are designed to be reusable. We can create a component once and use it multiple times throughout your application. This reusability reduces code duplication and promotes consistency in the UI.

  3. **Hierarchical Structure(cấu trúc phân cấp):** Components can be composed hierarchically, with parent components containing child components. This hierarchical structure reflects the natural organization of user interfaces and promotes a clear separation of concerns.

  4. **Props and Data Flow:** **Composition** often involves passing data and props from parent components to child components. This allows you to customize and configure child components based on the needs of the application. Data flows from top (parent) to bottom (child) in the component hierarchy.

## 8. Hook in ReactJs:

- **React Hooks** are functions that allow we to "hook into" **React** state and lifecycle features from function component

1. **<span style="font-size: 18px">useState</span>:** The **useState** hook allows we to add state to our functional components. It takes **an initial state value** and **returns an array** with the c**urrent state value** and a **function to update it**.

   - Exam:

     ```js
     function Counter() {
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={() => setCount(count + 1)}>Increment</button>
         </div>
       );
     }
     ```

2. **<span style="font-size: 18px">useEffect</span>:** The useEffect hook enables we to perform side effects in your components. It accepts a function as its first argument, which will be executed after the component renders. You can use it for tasks like data fetching, subscriptions, or manually changing the DOM.

   - Exam:

     ```js
     function Timer() {
       const [time, setTime] = useState(0);

       useEffect(() => {
         const intervalId = setInterval(() => {
           setTime((prevTime) => prevTime + 1);
         }, 1000);

         return () => {
           clearInterval(intervalId);
         };
       }, []);

       return <p>Time: {time} seconds</p>;
     }
     ```

## 9. Common Hook:

1. **<span style="font-size: 18px">useCallback</span>:** useCallback is used for memoizing functions, especially when you pass functions as props to child components. It helps in preventing unnecessary re-renders of child components by memoizing the function reference.

- Exam:

  ```js
  const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };

    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };
  ```

  ```js
  Todos.js;

  import { memo } from "react";

  const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };

  export default memo(Todos);
  ```

  - Try running this and click the count increment button.

  - You will notice that the Todos component re-renders even when the todos do not change.

  - Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

  - This is because of something called "referential equality".

  - Every time a component re-renders, its functions get recreated. Because of this, the **addTodo function** has actually changed.

  #### Solution

  - To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

  - Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

  ```js
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  ```

  - Now the Todos component will only re-render when the todos prop changes.

2. **<span style="font-size: 18px">useMemo</span>:** **useMemo** is used to memoize the result of a computation. It's useful when you have expensive calculations that depend on certain values, and you want to avoid recalculating them on every render.

- Exam:

  ```js
  function ExpensiveComponent({ data }) {
    const result = useMemo(() => {
      // Perform an expensive computation using 'data'
      return data * 2;
    }, [data]); // Memoize the result

    return <p>Result: {result}</p>;
  }
  ```

  - In this example, the result value is only recomputed when the data prop changes.

3.  **<span style="font-size: 18px">useContext</span>:** **useContext** allows we to access data from a context provider in a functional component. It's typically used when we've created a context using React.createContext and want to access its values.

- Exam:

  ```js
  const MyContext = React.createContext();

  function ParentComponent() {
    return (
      <MyContext.Provider value="Hello, from context!">
        <ChildComponent />
      </MyContext.Provider>
    );
  }

  function ChildComponent() {
    const contextValue = useContext(MyContext);

    return <p>{contextValue}</p>;
  }
  ```

4.  **<span style="font-size: 18px">useRef</span>:** **useRef** hook is used to create a mutable ref object that can hold a reference to a DOM element or a value that persists across renders. useRef is often used for accessing and interacting with DOM elements directly and for preserving values between renders without causing re-renders.

## 10. Rule Of Hook:

1. **Only Call Hooks at the Top Level:** Hooks should only be called at the top level of a functional component or custom hook. They should not be called inside loops, conditions, or nested functions. This rule ensures that React can maintain the proper order and association of hooks between renders.

2. **Call Hooks from React Functions:** Hooks should only be called from React functional components or custom hooks. We should not call them in regular JavaScript functions or class components. This ensures that hooks are used within the React component lifecycle.

3. **Use Hooks in the Same Order:** If you use multiple hooks in a component, make sure to use them in the same order on every render. This ensures that React can correctly associate each hook with its corresponding state variable.

## 11. Rendering:

### 1. Lists and Key:

- Using keys with lists is an important concept in React to ensure efficient rendering and proper handling of dynamic data. When rendering lists, always provide a unique and stable key for each item in the list to help React manage and update the DOM effectively.

### 2. Lifting state:

- **"Lifting state"** is a term used in React to describe the process of managing and sharing state between components by moving the state up the component tree. It involves elevating or lifting the state from a lower-level component to a higher-level component, typically a parent component, so that it can be accessed and shared by other components within the application.

- The main idea behind lifting state is to centralize the management of state in a higher-level component and then pass that state down to child components as props. This allows multiple components to share and interact with the same state, ensuring consistency and synchronization

- Basic example to illustrate the concept of lifting state:

  ```jsx
  import React, { useState } from "react";
  import Counter from "./Counter";
  import Display from "./Display";

  function App() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <Counter count={count} setCount={setCount} />
        <Display count={count} />
      </div>
    );
  }

  export default App;
  ```

- In this example:

  - The App component manages the count state using the useState hook.
  - The count state is passed as a prop to both the Counter and Display components.
  - The Counter component allows the user to increment or decrement the count, and it receives the setCount function as a prop to update the state.
  - The Display component simply displays the current count.
  - By lifting the state (the count value) up to the App component, both Counter and Display can access and interact with the same state. When the state changes in the App component, itautomatically updates both child components, ensuring that they stay in sync.

  - Lifting state is a fundamental concept in React that helps in managing shared data and ensuring consistency across different parts of your application. It promotes reusability and maintainability by centralizing state management in higher-level components.
