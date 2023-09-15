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

## To loop over the elements of the array:

```js
    for (let i=0; i<arr.length; i++) //works fastest old-browser-compatible.
    for (let item of arr) //the modern syntax for items only,
    for (let i in arr) //never use.
```

- To compare arrays, **don’t use the == operator** (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

#### Instead you can use for..of loop to compare arrays item-by-item.
