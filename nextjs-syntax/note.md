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

- The team behind Next.js has created a React hook library for data fetching called `SWR`.

- It is highly recommended if we are fetching data on the client-side.

- It handles `caching, revalidation, focus tracking, refetching on intervals`, and more.

- Exam:

  ```tsx
  import useSWR from "swr";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  function Profile() {
    const { data, error } = useSWR("/api/profile-data", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </div>
    );
  }
  ```

# Styling:

## CSS Modules

- CSS Modules locally scope CSS by automatically creating `a unique class name`.

- This allows we to use the same class name in different files without worrying about collisions.

- This behavior makes CSS Modules the ideal way to include component-level CSS.

- **Exam:**

  - For example, consider a reusable Button component in the components/ folder:

         ..................................................

# Optimizing

- **Image Optimization**

### Usage

`import Image from 'next/image'`

- **Local Images**

- To use a local image, import our `.jpg, .png, or .webp` image files.

- Next.js will `automatically determine` the `width and height of our image` based on the imported file.

- Exam:

`pages/index.js`

```tsx
import Image from "next/image";
import profilePic from "../public/me.png";

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
}
```

## API Function:

### getInitialProps:

- `getInitialProps` is an **async function** that can be added to the default` exported React component` for the page.

- It will run on both the server-side and again on the client-side during page transitions. The result of the function will be `forwarded to the React component as props`.

- Exam:

`pages/index.tsx`

```tsx
import { NextPageContext } from "next";

Page.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default function Page({ stars }: { stars: number }) {
  return stars;
}
```

### Context Object

- `getInitialProps` receives a `single argument called context`, which is an object with the following properties:

  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style=" background-color: #2a2828; border-radius: 4px;">pathname</td>
      <td>Current route, the path of the page in /pages</td>
      
    </tr>

    <tr>
      <td style=" background-color: #2a2828; border-radius: 4px;">query</td>
      <td>Query string of the URL, parsed as an object</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">asPath</td>
      <td>String of the actual path (including the query) shown in the browser</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">req</td>
      <td>HTTP request object (server only)</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">res</td>
      <td>HTTP response object (server only)</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">err</td>     
      <td>Error object if any error is encountered during the rendering</td>
    </tr>
  </table>

## getServerSideProps:

- When exporting a function called `getServerSideProps (Server-Side Rendering)` from a page, Next.js will `pre-render this page on each request` **using the data returned by getServerSideProps**.

- This is useful if we want to fetch data that changes often, and have the page update to show
  the most current data.

### Context parameter:

<table>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style=" background-color: #2a2828; border-radius: 4px;">params</td>
      <td>If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js, then params will look like { id: ... }.</td>
    </tr>
    <tr>
      <td style=" background-color: #2a2828; border-radius: 4px;">req</td>
      <td>The HTTP IncomingMessage object, with an additional cookies prop, which is an object with string keys mapping to string values of cookies.</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">res</td>
      <td>The HTTP response object.</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">query</td>
      <td>An object representing the query string, including dynamic route parameters.</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">preview</td>
      <td>(Deprecated for draftMode) preview is true if the page is in the Preview Mode and false otherwise.</td>
    </tr>
    <tr >
      <td style=" background-color: #2a2828; border-radius: 4px;">err</td>
      <td>Error object if any error is encountered during the rendering</td>
    </tr>

  </table>

## getStaticPaths:

- When exporting a function called `getStaticPaths` from a page that uses `Dynamic Routes`, Next.js will statically `pre-render all the paths` specified by `getStaticPaths`.

### getStaticPaths return values

- `The getStaticPaths function` should return an object with the following required properties:

  - `paths`: The paths key determines which paths will be pre-rendered.

  - Exam:

  ```tsx
    return {

      paths: [
        { params: { id: '1' }},
        {
        params: { id: '2' },
        // with i18n configured the locale for the path can be returned as well
        locale: "en",
        },
      ],
      fallback: ...
    }
  ```

### fallback

#### `FALSE`:

- If `fallback` is `false`, then any paths not returned by getStaticPaths will result` in a 404 page`.

#### `TRUE`:

- When `fallback` is set to `true`, Next.js will still generate static pages for the paths specified in `getStaticPaths`, but it will also allow the server to generate new pages on-the-fly for paths that are requested but not pre-generated.

- The first request for an `undefined` path will render a "`fallback`" version of the page while the page is being built in the background. Subsequent requests for the same path will return the statically generated page.

- This option is useful when we have a `large number of dynamic paths`, and we want to build them incrementally.

#### `Blocking`

- With fallback set to 'blocking', Next.js will behave `similarly to true`, generating static pages for the specified paths.

- However, instead of rendering a fallback page immediately, it will wait until the page is built in the background and then serve the statically generated page.

- This option can be beneficial when you want to show a `fully static page` to the user but `don't want to block` the request while the page is being built.

## getStaticProps

- Exporting a function called `getStaticProps` will `pre-render a page at build time` using the props returned from the function

#### Context parameter

- The `context` parameter is an object containing the following keys:

Name Description
params Contains the route parameters for pages using dynamic routes. For example, if the page name is [id].js, then params will look like { id: ... }. You should use this together with getStaticPaths, which we'll explain later.
preview (Deprecated for draftMode) preview is true if the page is in the Preview Mode and false otherwise.
previewData (Deprecated for draftMode) The preview data set by setPreviewData.
draftMode draftMode is true if the page is in the Draft Mode and false otherwise.
locale Contains the active locale (if enabled).
locales Contains all supported locales (if enabled).
defaultLocale Contains the configured default locale (if enabled).

    ------------------------ Convert to Table-----------------------------

##### getStaticProps return values

- `The getStaticProps` function should return an object containing either `props, redirect, or notFound` followed by an optional `revalidate` property.

  - **`Props`**:

    - The props object is a `key-value pair`, where each value is received by the page component.

    - It should be a serializable object so that any props passed, could be serialized with `JSON.stringify`

  - **`Revalidate`**

    - The revalidate property is the `amount in seconds` after which a `page re-generation can occu`r (defaults to false or no revalidation).

  - **`NotFound`**

    - `The notFound` boolean allows the page to `return a 404 status and 404 Page`.
    - `With notFound:` `true`, **the page will return a 404** even if there was a successfully generated page before. This is meant to support use cases like user-generated content getting removed by its author.
