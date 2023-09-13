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
