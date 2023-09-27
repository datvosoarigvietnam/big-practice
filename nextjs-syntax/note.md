# Nextjs

## Pages and Layouts

- The Pages Router has a file-system based router built on the concept of pages.

- When a file is added to the pages directory, it's automatically available as a route.

- **In Next.js**, a page is a **React Component exported from a .js, .jsx, .ts, or .tsx file** in the pages directory. Each page is associated with **a route based on its file name**.

  - Exam: `If we create pages/about.js that exports a React component like below, it will be accessible at /about`.

  ```tsx
  export default function About() {
    return <div>About</div>;
  }
  ```

### Index routes

- The router will automatically route files named index to the root of the directory.

  `pages/index.js → /`

  `pages/blog/index.js → /blog`

### Nested routes

- The router **supports nested files**. If we create a nested folder structure, files will automatically be routed in the same way still.

  `pages/blog/first-post.js → /blog/first-post`

  `pages/dashboard/settings/username.js → /dashboard/settings/username`

### Pages with Dynamic Routes

- Next.js supports pages with **dynamic routes**.

- For example, if we create a file called` pages/posts/[id].js`, then it will be accessible at `posts/1, posts/2`, etc.

To learn more about dynamic routing, check the Dynamic Routing documentation.

## Dynamic Routes

### Convention(quy ước):

- **A Dynamic Segment** can be created by wrapping a folder's name in **square brackets**: `[folderName]`.
- For example, `[id] or [slug]`.

- Dynamic Segments can be accessed from **useRouter**.

- Examp:

- For example, a blog could include the following route `pages/blog/[slug].js` where [slug] is the Dynamic Segment for blog posts.

```tsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}
```

<table>
  <tr>
    <th>Route</th>
    <th>Example URL</th>
    <th>params</th>
  </tr>
  <tr>
    <td style=" background-color: #2a2828; border-radius: 4px;">pages/blog/[slug].js</td>
    <td>/blog/a</td>
    <td>{ slug: 'a' }</td>
  </tr>

  <tr >
    <td style=" background-color: #2a2828; border-radius: 4px;">pages/blog/[slug].js</td>
    <td>/blog/b</td>
    <td>{ slug: 'b' }</td>
  </tr>
</table>

### Catch-all Segments

- **Dynamic Segments** can be extended to catch-all subsequent segments by adding
  an ellipsis inside the brackets `[...folderName]`.

<table>
  <tr>
    <th>Route</th>
    <th>Example URL</th>
    <th>params</th>
  </tr>
  <tr>
    <td style=" background-color: #2a2828; border-radius: 4px;">pages/shop/[...slug].js</td>
    <td>/shop/a</td>
    <td>{ slug: ['a'] }</td>
  </tr>
  <tr >
    <td style=" background-color: #2a2828; border-radius: 4px;">pages/shop/[...slug].js</td>
    <td>/shop/a/b</td>
    <td>{ slug: ['a', 'b'] }</td>
  </tr>
</table>

## Linking and Navigating:

- The Next.js router allows we to do client-side route **transitions between pages**, similar to a single-page application.

- A React component called `Link` is provided to do this client-side route transition.

  ```tsx
  import Link from "next/link";

  function Home() {
    return (
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    );
  }

  export default Home;
  ```

### Shallow Routing

- Shallow Routing is a feature in Next.js that allows we to **change the URL in the browser's address bar without reloading the page**.

- This helps **improve the user experience** when navigating within our web application.

- Some key points about Shallow Routing in Next.js:

  - **No Page Reload:** When you use **Shallow Routing** to change the URL, the browser only updates the URL in the address bar **without reloading the page.** This ensures a smoother user experience and preserves the page's state.

  - **Suitable for Highly Dynamic Pages:** Shallow Routing is often used for pages with multiple parameters or pages with dynamically generated content, such as news pages or search pages.

  - **Compatible with API Routes:** Shallow Routing works well with Next.js API Routes, making it easy to create interactive URLs with dynamic data.

To use Shallow Routing in Next.js, we need to use **the useRouter hook** from the **next/router library** and call the push or replace method with the **{ shallow: true }** option.

- Exam:

  ```tsx
  const router = useRouter();

  const handleShallowNavigate = () => {
    router.push("/page?param=value", undefined, { shallow: true });
    // hoặc router.replace('/page?param=value', undefined, { shallow: true });
  };
  ```

## RENDERING :

### Server-side Rendering (SSR) or "Dynamic Rendering".

- If a page uses **Server-side Rendering**, the page HTML is generated **on each request**.

- To use **Server-side Rendering** for a page, you need to export an async function called getServerSideProps. This function will be called by the server on every request.

- For example, suppose that your page needs to pre-render frequently updated data.

- We can write **getServerSideProps** which fetches this data and passes it to Page like below:

### Static Site Generation (SSG)

- If a page uses **Static Generation**, the page HTML **is generated at build time**. That means `in production`, the page HTML is generated when we run `next build`. This HTML will then be reused on each request. It can be cached by a CDN.

- Some pages **require fetching external** data **for pre-rendering**.

- There are two **scenarios(kịch bản)**, and one or both might apply.

- In each case, we can use these functions that Next.js provides:

  - 1. Our page content depends on external data: Use `getStaticProps`.

  - 2. Our page paths depend on external data: Use `getStaticPaths` (usually in addition to `getStaticProps`).

    - **Key Feature:** SSG pre-generates all pages during the build process.

    - **How It Works:** SSG builds pages in advance and stores them as static HTML files. When a user accesses a page, the content is pre-generated and simply served as static HTML files.

    - **Use When:** Use SSG when web page content changes infrequently and doesn't depend on dynamic data or user state. It's suitable for websites with mostly static or rarely changing content.

    - **Benefits:** SSG provides fast performance, security, and ease of management. It's suitable for websites with content that changes infrequently and doesn't require user interaction to generate content.

## Automatic Static Optimization:

- Next.js automatically determines that a page is `static` (can be prerendered) if it `has no blocking data requirements`.

- This `determination` is made by the absence(vắng mặt) of `getServerSideProps` and `getInitialProps` in the page.

`Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity.`

### How it works

- If `getServerSideProps` or `getInitialProps` is present in a page, Next.js will switch to render the page `on-demand`, `per-request` (meaning Server-Side Rendering).

- During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.

- `After hydration`, Next.js will trigger an update to our application to provide the route parameters in the query object.

- The cases where the query will be updated after hydration triggering another render are:

  - The page is a `dynamic-route`.

  - The page has `query values` in the URL.

  - **_Rewrites_** are configured in our `next.config.js` since these can have parameters that may need to be parsed and provided in the query.

## Client-side Rendering (CSR)

- In Next.js, there are two ways you can implement client-side rendering:

- 1.  Using `React's useEffect() hook` inside our pages instead of `the server-side rendering methods` (**getStaticProps and getServerSideProps**).

- 2.  Using a data fetching library like `SWR` or `TanStack Query` to fetch data on the client (recommended).

# Data Fetching

- Data fetching in Next.js allows we to render our content in `different ways`, depending on `our application's use case`.

## getStaticProps

- If we export a function called `getStaticProps` (`Static Site Generation`) from a page, Next.js will pre-render this page at `build time` using the `props` **returned** by `getStaticProps`.

### When should We use getStaticProps?

- We should use `getStaticProps` if:

  - The data `required` to render the page is available at build time ahead of a user’s request.

  - The page `must be pre-rendered` (for SEO) and be very fast — `getStaticProps` generates `HTML and JSON files`, both of which can be cached by a CDN for performance

### When does getStaticProps run?

- `getStaticProps` always `runs on the server` and `never on the client`. We can validate code written inside `getStaticProps` is `removed` from the client-side

  - `getStaticProps` always runs during next build

  - `getStaticProps` runs in the background when using `fallback`: `true`

  - `getStaticProps` is called before initial render when using `fallback`: `blocking`

  - `getStaticProps` runs in the background when using `revalidate`

  - `getStaticProps` runs on-demand in the background when using `revalidate()`

- When combined with `Incremental Static Regeneration`, **getStaticProps** will run in the `background` while the stale page is being `revalidated`, and the fresh page served to the browser.

### Where can We use getStaticProps

- `getStaticProps` can only be exported from a page. We cannot export it from `non-page files`, \_app, \_document, or \_error.

- One of the reasons for this **restriction(hạn chế)** is that React needs to have all the required data before the page is rendered.

### Runs on every request in development

- In development (next dev), `getStaticProps` will be called on every request.

## getStaticPaths

- If a page has` Dynamic Routes` and uses `getStaticProps`, it needs to `define a list of paths` to be statically generated

- When we export a function called `getStaticPaths` (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all `the paths` specified by `getStaticPaths`.

### When should I use getStaticPaths?

- We should use `getStaticPaths` if you’re statically pre-rendering pages that use dynamic routes and:

- The data comes from a **headless CMS**

- The data comes from a database

- The data comes from the filesystem

- The data can be publicly cached (not user-specific)

- The page must be `pre-rendered` (for SEO) and be very fast — `getStaticProps` generates HTML and JSON files, both of which can be cached by a CDN for performance

#### When does getStaticPaths run

getStaticPaths will only run during build in production, it will not be called during runtime

#### How does getStaticProps run with regards to getStaticPaths

- `getStaticProps` runs `during next build` for any paths returned during build

- `getStaticProps` runs` in the background` when using `fallback: true`

- `getStaticProps` is called before `initial render` when using fallback: blocking

#### Where can I use getStaticPaths

- `getStaticPaths` must be used with `getStaticProps`.

- We cannot use `getStaticPaths` with `getServerSideProps`.

- We can export `getStaticPaths` from a Dynamic Route that also uses `getStaticProps`.
- We cannot export `getStaticPaths` from non-page file (e.g. your components folder).
- You must `export getStaticPaths` as a standalone function, and not a property of the page component.

#### Runs on every request in development

- In development (next dev), `getStaticPaths` will be called on every request.

## getServerSideProps

- If we export a function called `getServerSideProps (Server-Side Rendering)` from a page, Next.js will **pre-render** this page on each request using the data returned by `getServerSideProps`

### When does getServerSideProps run

- `getServerSideProps` only runs on server-side and `never runs on the browser`. If a page uses `getServerSideProps`, then:

- When we request this page directly, `getServerSideProps` runs at request time, and this page will be pre-rendered with the returned props

- When we request this page on client-side page transitions through `next/link` or `next/router`, Next.js sends an API request to the server, which runs `getServerSideProps`

- `getServerSideProps` returns JSON which will be used to render the page. All this work will be `handled automatically` by Next.js, so we don’t need to do anything extra as long as you have `getServerSideProps defined`.

- getServerSideProps `can only be exported from a page`. You can’t export it from `non-page files`
  **..................... continute updating................**

## Incremental Static Regeneration:

- Incremental Static Regeneration (ISR) is a concept in Next.js that allows we to create static pages that can be `asynchronously` updated with new data without the need to rebuild the entire application.

- ISR is commonly used to create initially statically generated dynamic pages and then update their content when changes occur, such as data from a CMS or API.

- Exam:

  - `Step 1`: **Initial Static Page Generation**:

    - We create an initial static page, for example, `/blog/[slug].js`, to display the content of blog posts.

    - This page is initially generated using `getStaticPaths` and `getStaticProps` to fetch data from a `CMS or API` and create static pages for each blog post.

  - `Step 2`: **Updating Content (Incremental Static Regeneration)**:

    - The static page created in step 1 has a configured expiration time. After it expires, it is automatically updated to fetch new data from the CMS or API.

    - ISR allows you to specify the revalidation time for each page, for example, every 5 minutes, every hour, or custom configuration.
      Step 3: Displaying Updated Page:

  - When new data is available from the CMS or API, the static page is `asynchronously` updated to `display the new content to users without the need to rebuild` the entire application.

  - Users see the `updated content each time they access the page`.

    ```tsx
      // Initial Static Page (getStaticPaths and getStaticProps)

      export async function getStaticPaths() {
        // Query a list of posts from the data source (CMS or API)
        const posts = await fetchPosts();

      // Create a list of slugs for each post
      const paths = posts.map((post) => ({
      params: { slug: post.slug },
      }));

      return { paths, fallback: 'blocking' };
      }

      export async function getStaticProps({ params }) {
      // Query data for a specific post based on the slug
      const post = await fetchPostBySlug(params.slug);

      return {
      props: { post },
      revalidate: 60 \* 5, // Update every 5 minutes
      };
      }

      // Initially generated static page, then asynchronously updated every 5 minutes
    ```

## Client-side Fetching

- Client-side data fetching is useful when our page `doesn't require SEO indexing`, when we `don't need to pre-render our data`, or when `the content of our pages needs to update frequently`.
- Unlike the server-side rendering APIs, we can use `client-side data fetching` at the `component level`.

#### We can fetch data on the client side using the `useEffect` hook.

#### Client-side data fetching with SWR
