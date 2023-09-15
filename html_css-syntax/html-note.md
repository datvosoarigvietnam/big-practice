# HTML

## 1. What are tags and attributes in HTML?

Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element.

- For example,

  ```html
  <p align="center">Interview questions</p>
  ```

in this the ‘align’ is the attribute using which we will align the

## 2. What are void elements in HTML?

- HTML elements which do not have closing tags or do not need to be closed are Void elements.
- For Example , etc.
  ```html
  <img />,
  <hr />
  ```

## 3. What is the advantage of collapsing white space?

- In HTML, a blank sequence of whitespace characters is treated as a single space character, Because the browser collapses multiple spaces into a single space character and this helps a developer to indent lines of text without worrying about multiple spaces and maintain readability and understandability of HTML codes.

## 4. What is the ‘class’ attribute in HTML?

The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.

## 10. Describe HTML layout structure.

- Every web page has different components to display the intended content and a specific UI. But still, there are few things which are templated and are globally accepted way to structure the web page, such as:

  - **header:** Stores the starting information about the web page.

  - **footer:** Represents the last section of the page.

  - **nav:** The navigation menu of the HTML page.

  - **article:** It is a set of information.

  - **section:** It is used inside the article block to define the basic structure of a page.

  - **aside:** Sidebar content of the page

## 11. What are the various formatting tags in HTML?

- HTML has various formatting tags:

  - **b:** - makes text bold
  - **i:** - makes text italic
  - **em:** - makes text italic but with added semantics importance
  - **big:** - increases the font size of the text by one unit
  - **small:** - decreases the font size of the text by one unit
  - **sub:** - makes the text a subscript
  - **sup:** - makes the text a superscript
  - **del:** - displays as strike out text
  - **strong:** - marks the text as important
  - **mark:** - highlights the text
  - **ins:** - displays as added text

## 12. In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?

- There are mainly 7 values of position attribute that can be used to position an HTML element:

  - **static**: Default value. Here the element is positioned according to the normal flow of the document.
  - **absolute**: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.
  - **fixed**: This is similar to absolute except here the elements are positioned relative to the **html** element.
  - **relative**: Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.
  - **initial**: This resets the property to its default value.
  - **inherit**: Here the element inherits or takes the property of its parent.

## 13. In how many ways you can display HTML elements?

- **inline:** Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.
- **block:** using this, we can display any inline element as a block-level element.
- **inline-block:** This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.
- **flex:** It displays the container and element as a flexible structure. It follows flexbox property.
- **inline-flex:** It displays the flex container as an inline element while its content follows the flexbox properties.
- **grid:** It displays the HTML elements as a grid container.
- **none:** Using this property we can hide the HTML element.

## 14. When to use scripts in the head and when to use scripts in the body?

- If the scripts contain some event-triggered functions or jquery library then we should use them in the head section. If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom. In short, follow below three points:

  1.  Place library scripts or event scripts in the head section.
  2.  Place normal scripts that do not write anything on the page, in the head section until there is any performance issue.
  3.  Place scripts that render something on the web page at the bottom of the body section.

## 15. What does a DOCTYPE do?

- DOCTYPE is an abbreviation for DOCument TYPE.
- A DOCTYPE is always associated to a DTD for Document Type Definition.

- A DTD defines how documents of a certain type should be structured (i.e. a button can contain a span but not a div), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD).

- For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects.
- Once a user agent has recognized a correct DOCTYPE, it will trigger the no-quirks mode matching this DOCTYPE for reading the document.
- If a user agent doesn't recognize a correct DOCTYPE, it will trigger the quirks mode.

- The DOCTYPE declaration for the HTML5 standards is !DOCTYPE html>.

- It controls whether the browsers uses "standards" or "quirks" mode to render the document.

## 16. SSR VS CSR

- We are using server side rendering for two reasons:

      - Performance benefit for our customers
      - Consistent SEO performance

- The main difference is that for SSR your server’s response to the browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript. That means for SSR your browser will start rendering the HTML from your server without having to wait for all the JavaScript to be downloaded and executed.

- For SSR, the user can start viewing the page while all of that is happening. For the CSR world, you need to wait for all of the above to happen and then have the virtual dom moved to the browser dom for the page to be viewab

## 17. Name 5 common block-level and inline HTML elements.

- **Block elements:** h1, p, ul, ol, li,

- **Inline elements:** span, a, strong, i, img

## 18. What are semantic and non-semantic elements?

- A semantic element clearly describes its meaning to both the browser and the developer.

  - Non-semantic elements: **div** and **span** Tells nothing about its content.

  - Semantic elements: **form**, **table**, and **article**,... **_Clearly_** defines its content.

## 19. What is the DOM? How does the DOM work? Explain in as much detail as possible.

- **The DOM** (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

- **The DOM** was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

- **The DOM** is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the with a defer attribute, or inside a DOMContentLoaded event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.

- **document.getElementById()** and **document.querySelector()** are common functions for selecting _DOM nodes_.

- Setting the **innerHTML** property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.
