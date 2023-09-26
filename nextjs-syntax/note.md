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
