# TanStack Query

### We can install React Query via NPM

```properties
    npm i @tanstack/react-query
    # or
   $ pnpm add @tanstack/react-query
    # or
   $ yarn add @tanstack/react-query
```

### Requirements

**React Query is optimized for modern browsers. It is compatible with the following browsers config**

```properties
    bash
    Chrome >= 73
    Firefox >= 78
    Edge >= 79
    Safari >= 12.1
    iOS >= 12   .2
    opera >= 53
```

### Devtools

- **Install and Import**: The devtools are a separate package that you need to install:

```properties
$ npm i @tanstack/react-query-devtools
# or
$ pnpm add @tanstack/react-query-devtools
# or
$ yarn add @tanstack/react-query-devtools
```

- We can import the devtools like this:

```js
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
```

### Important Defaults

- Out of the box, TanStack Query is configured with aggressive but sane defaults.

- Sometimes these defaults can catch new users off guard or make learning/debugging difficult if they are unknown by the user.
- Keep them in mind as you continue to learn and use TanStack Quer

- **Query instances via _useQuery_ or _useInfiniteQuery_ by default consider cached data as _stale_.**

- **Stale queries** are **refetched automatically** in the background when:
  - New instances of the query mount
  - The window is refocused
  - The network is reconnected
  - The query is optionally configured with a refetch interval

### Queries

**Query Basics**

- **A query** is a declarative dependency on an asynchronous source of data that is tied to a unique key.

- **A query** can be used with any **Promise based method** (including GET and POST methods) to fetch data from a server.

- If our method modifies data on the server, we recommend using **Mutations instead**

#### To subscribe to a query in our components or custom hooks, call the _useQuery hook_ with at least(với ít nhất):

- A unique key for the query
- A function that returns a promise that:

  - Resolves the data, or

  - Throws an error

- Exam:

```tsx
import { useQuery } from "@tanstack/react-query";

function App() {
  const info = useQuery({ queryKey: ["todos"], queryFn: fetchTodoList });
}
```

- **The unique key** we provide is used internally for **refetching, caching**, and **sharing** our queries throughout your application.

```js
const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodoList });
```

- **The result object** contains a few very important states

- A query can only be in one of **the following states at any given moment**:

  - **isLoading or status === 'loading'** - The query has no data yet
  - **isError or status === 'error'** - The query encountered an error
  - **isSuccess or status === 'success'** - The query was successful and data is available

## Query Keys:

- At its core, **TanStack Query manages query caching** for you **based on query keys**.
- Query keys have to be an Array at the top level, and can be as simple as an Array with a single string, or as complex as an array of many strings and nested objects.
- As long as the query key is serializable, and **unique to the query's data**, we can use it!

### Simple Query Keys :

- The **simplest** form of a key is **an array with constants values**. This format is useful for:

  - Generic List/Index resources

  - **Non-hierarchical(Không phân cấp)** resources

- Exam:

  ```js
    // A list of todos
    useQuery({ queryKey: ['todos'], ... })

    // Something else, whatever!
    useQuery({ queryKey: ['something', 'special'], ... })
  ```

### Array Keys with variables :

- When a query needs **more information to uniquely describe** its data, we can use an **array with a string** and any **number of serializable objects** to describe it. **This is useful for**:

- **Hierarchical or nested resources**
  - It's common to pass an ID, index, or other primitive to uniquely identify the item
- **Queries with additional parameters**

  - It's common to pass an object of additional options

- Exam:

```js
  // An individual todo
  useQuery({ queryKey: ['todo', 5], ... })

  // An individual todo in a "preview" format
  useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

  // A list of todos that are "done"
  useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```

### Query Keys are hashed deterministically!

- This means that **no matter the order of keys in objects**, all of the following queries **are considered equal**:

  ```tsx
    useQuery({ queryKey: ['todos', { status, page }], ... })
    useQuery({ queryKey: ['todos', { page, status }], ...})
    useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
  ```

- The following query keys, however, are not equal. **Array item order matters**!

  ```tsx
    useQuery({ queryKey: ['todos', status, page], ... })
    useQuery({ queryKey: ['todos', page, status], ...})
    useQuery({ queryKey: ['todos', undefined, page, status], ...})
  ```

### If our query function depends on a variable, include it in our query key

- Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that change.

- For example:

  ```js
  function Todos({ todoId }) {
    const result = useQuery({
      queryKey: ["todos", todoId],
      queryFn: () => fetchTodoById(todoId),
    });
  }
  ```

- Note that **query keys** act as dependencies for your query functions.

- Adding dependent variables to our query key will ensure that **queries are cached independently**, and that any time **a variable changes**, queries will be **refetched automatically** (depending on your **staleTime** settings)

### Query Functions:

- A query function can be literally any function that **_returns a promise_**.

- **The promise** that is returned should either **resolve the data** or **throw an error**.

- All of the following **are valid query function configurations**:

  ```js
  useQuery({ queryKey: ["todos"], queryFn: fetchAllTodos });
  useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => fetchTodoById(todoId),
  });
  useQuery({
    queryKey: ["todos", todoId],
    queryFn: async () => {
      const data = await fetchTodoById(todoId);
      return data;
    },
  });
  useQuery({
    queryKey: ["todos", todoId],
    queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
  });
  ```

#### Handling and Throwing Errors:

- **For TanStack Query** to determine a query has errored, the query function must **throw or return a rejected Promise**.

- Any error that is thrown in the query function will be persisted on the **error** state of the query.

```js
const { error } = useQuery({
  queryKey: ["todos", todoId],
  queryFn: async () => {
    if (somethingGoesWrong) {
      throw new Error("Oh no!");
    }
    if (somethingElseGoesWrong) {
      return Promise.reject(new Error("Oh no!"));
    }

    return data;
  },
});
```

<!-- ## Parallel Queries(Truy vấn song song)

- **"Parallel" queries** are queries that are executed in parallel, or at the same time so as to maximize fetching concurrency. -->

## Dependent Queries

### useQuery dependent Query

- _Dependent (or serial) queries_ depend on previous ones to finish before they can execute. To achieve this, it's as easy as using _the enabled option_ to tell a query when it is ready to run:

  ```tsx
  // Get the user
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: getUserByEmail,
  });

  const userId = user?.id;

  // Then get the user's projects
  const {
    status,
    fetchStatus,
    data: projects,
  } = useQuery({
    queryKey: ["projects", userId],
    queryFn: getProjectsByUser,
    // The query will not execute until the userId exists
    enabled: !!userId,
  });
  ```

## Dependent Queries

### useQuery dependent Query

- Dependent (or serial) queries _depend on previous ones_ to finish before they can execute.

- To achieve this, it's as easy as using _the enabled option_ to tell a query when it is ready to run:

  ```js
  // Get the user
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: getUserByEmail,
  });

  const userId = user?.id;

  // Then get the user's projects
  const {
    status,
    fetchStatus,
    data: projects,
  } = useQuery({
    queryKey: ["projects", userId],
    queryFn: getProjectsByUser,
    // The query will not execute until the userId exists
    enabled: !!userId,
  });
  ```

## Background Fetching Indicators

- A query's _status === 'loading'_ state is _sufficient enough to show_ the initial hard-loading state for a query, but sometimes we may want to display an additional indicator that _a query is refetching in the background_.

- To do this, _queries_ also supply you with an _isFetching_ boolean that we can use to show that it's in a _fetching state_, regardless of the state of the _status_ variable:

```js
function Todos() {
  const {
    status,
    data: todos,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return status === "loading" ? (
    <span>Loading...</span>
  ) : status === "error" ? (
    <span>Error: {error.message}</span>
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <div>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </>
  );
}
```

### Displaying Global Background Fetching Loading State

- In addition _to individual query loading states_, if we would like to _show a global loading_ indicator when any queries are fetching (including in the background), we can use the _useIsFetching_ hook:

  ```tsx
  import { useIsFetching } from "@tanstack/react-query";

  function GlobalLoadingIndicator() {
    const isFetching = useIsFetching();

    return isFetching ? (
      <div>Queries are fetching in the background...</div>
    ) : null;
  }
  ```

## Window Focus Refetching

- If a user leaves our application and returns and the query _data is stale_, TanStack Query _automatically requests fresh data_ for us in the background.

- We can _disable this globally or per-query_ using the _refetchOnWindowFocus_ option:

### Disabling Globally

```tsx
//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

### Disabling Per-Query

- If we ever want to **disable** a query from automatically running, we can use the **enabled = false** option.

- When enabled **is false**:

  - If the query has cached data, then the query will be initialized in the **status === 'success'** or **isSuccess state**.

  - If the query does **not have cached data**, then the query will start in the **status === 'loading'** and **fetchStatus === 'idle'** state.

  - The query will **not automatically fetch on mount**.

  - The query will **not automatically refetch in the background**.

  - The query will **ignore query client invalidateQueries** and **refetchQueries** calls that would normally result in **the query refetching**.

  - **Refetch** returned from useQuery can be used to manually **trigger** the query to fetch.

  - Exam:

  ```tsx
  function Todos() {
    const { isInitialLoading, isError, data, error, refetch, isFetching } =
      useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodoList,
        enabled: false,
      });
    return (
      <div>
        <button onClick={() => refetch()}>Fetch Todos</button>

        {data ? (
          <>
            <ul>
              {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </>
        ) : isError ? (
          <span>Error: {error.message}</span>
        ) : isInitialLoading ? (
          <span>Loading...</span>
        ) : (
          <span>Not ready ...</span>
        )}

        <div>{isFetching ? "Fetching..." : null}</div>
      </div>
    );
  }
  ```

### Lazy Queries

- The enabled option can not only be used to permanently disable a query, but also to enable / disable it at a later time.

- A good example would be a filter form where you only want to fire off the first request once the user has entered a filter value:

  ```tsx
  function Todos() {
    const [filter, setFilter] = React.useState('')

    const { data } = useQuery({
        queryKey: ['todos', filter],
        queryFn: () => fetchTodos(filter),
        // ⬇️ disabled as long as the filter is empty
        enabled: !!filter
    })

    return (
        <div>
          // 🚀 applying the filter will enable and execute the query
          <FiltersForm onApply={setFilter} />
          {data && <TodosTable data={data}} />
        </div>
    )
  }
  ```

## Lazy Queries

- The **enabled option** can not only be used to **permanently(vĩnh viễn)** **disable a query**, but also to **enable / disable it at a later time**.

- A good example would be a filter form where we only want to **fire off** **the first request** once the user has entered a filter value:

```tsx
function Todos() {
 const [filter, setFilter] = React.useState('')

 const { data } = useQuery({
     queryKey: ['todos', filter],
     queryFn: () => fetchTodos(filter),
     // ⬇️ disabled as long as the filter is empty
     enabled: !!filter
 })

 return (
     <div>
       // 🚀 applying the filter will enable and execute the query
       <FiltersForm onApply={setFilter} />
       {data && <TodosTable data={data}} />
     </div>
 )
}

```

### isInitialLoading

- Lazy queries will be in **status: 'loading'** right from the start because **loading means that there is no data yet**.

- This is technically true, however, since we are not currently fetching any data (as the query is not enabled), it also means we likely** cannot use this flag to show a loading spinner**.

- If we are using disabled or lazy queries, we can use the **isInitialLoading** flag instead. It's a derived flag that is computed from:
  **_isLoading && isFetching_**

- So it will only be true if the query is currently fetching for the first time.

## Query Retries

- When a **useQuery** query fails (the query function throws an error), TanStack Query will **automatically retry the query** if that query's request has not reached the max number of consecutive retries (defaults to 3) or a function is provided to determine if a retry is allowed.

- We can configure retries both **on a global level** and an **individual query level.**

  - Setting retry = false will disable retries.

  - Setting retry = 6 will retry failing requests 6 times before showing the final error thrown by the function.

  - Setting retry = true will infinitely retry failing requests.

  - Setting retry = (failureCount, error) => ... allows for custom logic based on why the request failed.

```tsx
import { useQuery } from "@tanstack/react-query";

// Make a specific query retry a certain number of times
const result = useQuery({
  queryKey: ["todos", 1],
  queryFn: fetchTodoListPage,
  retry: 10, // Will retry failed requests 10 times before displaying an error
});
```

## Mutations

- **Unlike queries**, mutations are typically used to **create/update/delete** data or perform server side-effects.
- For this purpose, TanStack Query exports a **useMutation hook**.

Here's an example of a **mutation that adds a new todo** to the server:

```tsx
function App() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('/todos', newTodo)
    },
  })

  return (
    <div>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
```

- A mutation can only be **in one of the following states** at any given moment:

  - **isIdle or status === 'idle' :** - The mutation is currently idle or in a fresh/reset state

  - **isLoading or status === 'loading':** - The mutation is currently running

  - **isError or status === 'error':** - The mutation encountered an error

  - **isSuccess or status === 'success':** - The mutation was successful and mutation data is available

- Beyond those primary states, more information is available depending on the state of the mutation:

  - **error:** - If the mutation is in an error state, the error is available via the error property.
  - **data:** - If the mutation is in a success state, the data is available via the data property.

- In the example above, we also saw that you can pass variables to our mutations function by calling the mutate function with **a single variable or object**.

## Caching Examples

- This caching example illustrates the story and lifecycle of:

  - Query Instances with and without cache data

  - Background Refetching

  - Inactive Queries

  - Garbage Collection
