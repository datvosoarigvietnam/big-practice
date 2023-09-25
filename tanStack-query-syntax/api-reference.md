# API REFERENCE

## useQuery

```tsx
const {
  data,
  dataUpdatedAt,
  error,
  errorUpdateCount,
  errorUpdatedAt,
  failureCount,
  failureReason,
  fetchStatus,
  isError,
  isFetched,
  isFetchedAfterMount,
  isFetching,
  isInitialLoading,
  isLoading,
  isLoadingError,
  isPaused,
  isPlaceholderData,
  isPreviousData,
  isRefetchError,
  isRefetching,
  isStale,
  isSuccess,
  refetch,
  remove,
  status,
} = useQuery({
  queryKey,
  queryFn,
  cacheTime,
  enabled,
  networkMode,
  initialData,
  initialDataUpdatedAt,
  keepPreviousData,
  meta,
  notifyOnChangeProps,
  onError,
  onSettled,
  onSuccess,
  placeholderData,
  queryKeyHashFn,
  refetchInterval,
  refetchIntervalInBackground,
  refetchOnMount,
  refetchOnReconnect,
  refetchOnWindowFocus,
  retry,
  retryOnMount,
  retryDelay,
  select,
  staleTime,
  structuralSharing,
  suspense,
  useErrorBoundary,
});
```

**Options:**

- **queryKey: unknown[]**

  - **Required**

  - The query key to use for this query.

  - The query key will be hashed into a stable hash. See Query Keys for more information.

  - The query will automatically update when this key changes (as long as enabled is not set to false).

- **queryFn: (context: QueryFunctionContext) => Promise<TData>**

  - **Required**, **but only if no default query function has been defined** .

  - The function that the query will use to request data.

  - Receives a QueryFunctionContext

  - **Must return a promise** that will either resolve data or throw an error. **The data cannot be undefined**.

- **enabled: boolean**

  - Set this to false to **disable** this query from automatically running.

  - **Can be used for Dependent Queries**.

- **staleTime: number | Infinity**

  **Optional**

  - **Defaults to 0**

  - The time in milliseconds after data is considered stale.

  - This value only applies to the hook it is defined on.

  - If set to **Infinity**, the data will never be considered stale

- **cacheTime: number | Infinity**

  - Defaults to **5 _ 60 _ 1000 (5 minutes)** or **Infinity** during SSR

  - The time in milliseconds that unused/inactive cache data remains in memory.

  - When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different cache times are specified, the longest one will be used.

  - If set to Infinity, will disable garbage collection

- **onSuccess: (data: TData) => void**

  _- Deprecated - this callback will be removed in the next major version_

  - **Optional**
  - This function will fire any time the query successfully fetches new data.

- **onError: (error: TError) => void**

  _- Deprecated - this callback will be removed in the next major version_

  - Optional

  - This function will fire if the query encounters an error and will be passed the error.

- **onSettled: (data?: TData, error?: TError) => void**

  _- Deprecated - this callback will be removed in the next major version_

  - **Optional**

  - This function will fire any time the query is either successfully fetched or errors and be passed either the data or error.

- **keepPreviousData: boolean**

  - **Optional**

  - Defaults to **false**

  - If set, any previous data will be kept when fetching new data because the query key changed.

### Return

- **refetch**:

  ```ts
  (options: { throwOnError: boolean; cancelRefetch: boolean }) =>
    Promise<UseQueryResult>;
  ```

  - A function to manually refetch the query.
  - If the query errors, the error will only be logged.
  - If you want an error to be thrown, pass the **throwOnError: true option**

  - **cancelRefetch?: boolean**

    - Defaults to true

      - Per default, a currently running request will be cancelled before a new request is made

    - When set to false, no refetch will be made if there is already a request running.

- **remove: () => void**

  - A function to remove the query from the cache.

## useQueries

- The useQueries hook can be used to fetch a variable number of queries:

  ```tsx
  const results = useQueries({
    queries: [
      { queryKey: ["post", 1], queryFn: fetchPost, staleTime: Infinity },
      { queryKey: ["post", 2], queryFn: fetchPost, staleTime: Infinity },
    ],
  });
  ```

**Options**

- The **useQueries hook** accepts an **options object** with a queries key whose value is an array with query option objects identical to the **useQuery hook (excluding the context option)**.

- `context?: React.Context<QueryClient | undefined>`

- Use this to use a custom **React Query context**. Otherwise, **defaultContext** will be used.

- _`Having the same query key more than once in the array of query objects may cause some data to be shared between queries, e.g. when using placeholderData and select`_.
- To avoid this, consider de-duplicating the queries and map the results back to the desired structure.

**Returns:**

- The useQueries hook returns an array with all the query results. The order returned is the same as the input order.

## useInfiniteQuery

```tsx
const {
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
  ...result
} = useInfiniteQuery({
  queryKey,
  queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
  ...options,
  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
});
```

- `queryFn: (context: QueryFunctionContext) => Promise<TData>`

  - **Required**, but only if no default query function has been **defined defaultQueryFn**

  - The function that the query will use to request data.

  - Receives a QueryFunctionContext.

  - Must return a promise that will either resolve data or throw an error.

  - Make sure you return the data and the pageParam if needed for use in the props below.

- `getNextPageParam: (lastPage, allPages) => unknown | undefined`

  - When new data is **received** for this query, this function receives both the last page of **the infinite list of data** and the full array of all pages.

  - It should return a single variable that will be passed as the last optional parameter to your query function.

  - Return undefined to indicate there is no next page available.

- `getPreviousPageParam: (firstPage, allPages) => unknown | undefined`

  - When new data is received for this query, this function receives both the first page of the infinite list of data and the full array of all pages.

  - It should return a single variable that will be passed as the last optional parameter to your query function.

  - Return undefined to indicate there is no previous page available.

### Returns

- . . .

## useMutation

```tsx
const {
  data,
  error,
  isError,
  isIdle,
  isLoading,
  isPaused,
  isSuccess,
  failureCount,
  failureReason,
  mutate,
  mutateAsync,
  reset,
  status,
} = useMutation({
  mutationFn,
  cacheTime,
  mutationKey,
  networkMode,
  onError,
  onMutate,
  onSettled,
  onSuccess,
  retry,
  retryDelay,
  useErrorBoundary,
  meta,
});
```

```tsx
mutate(variables, {
  onError,
  onSettled,
  onSuccess,
});
```

### Options

- `mutationFn: (variables: TVariables) => Promise<TData>`

  - **Required**, but only if no default mutation **function has been defined**

  - A function that performs an asynchronous task and returns a promise.

  - Variables is an **object** that **mutate will pass to our mutationFn**

- **cacheTime: number | Infinity**

  - The time in milliseconds that **unused/inactive** cache data **remains** in memory.

  - When a mutation's cache becomes unused or inactive, that cache data will be garbage collected after this duration.

  - When different cache times are specified, the longest one will be used.

  - If set to Infinity, will disable garbage collection

- **mutationKey: unknown[]**

  - **Optional**

  - A mutation key can be set to inherit defaults set with queryClient.setMutationDefaults.

- `context?: React.Context<QueryClient | undefined>`
  - Use this to use a custom React Query context. Otherwise, defaultContext will be used.

## Returns

- `mutate: (variables: TVariables, { onSuccess, onSettled, onError }) => void`

  - **The mutation function** we can call with **variables** to **trigger** the mutation and optionally hooks on additional callback option

  - **variables: TVariables**

    - **Optional**

    - The variables object to pass to the mutationFn.

- `data: undefined | unknown`

  - Defaults to undefined

  - The last successfully resolved data for the query.

- `reset: () => void`

  - A function to **clean the mutation internal state** (i.e., it resets the mutation to its initial state).

## QueryClientProvider

- Use the QueryClientProvider component to connect and **provide a QueryClient** to our application:

  ```tsx
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

  const queryClient = new QueryClient();

  function App() {
    return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
  }
  ```

### Options:

- **client: QueryClient**

  - <span style="color: yellow">Required</span>

  - The QueryClient instance to provide

- `context?: React.Context<QueryClient | undefined>`

  - Use this to use a custom React Query context. Otherwise, **defaultContext** will be used.
