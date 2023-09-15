# CSS

## 1. What is CSS?

- CSS stands for Cascading Style Sheet.
- Styles define how to display HTML elements
- Styles were added to HTML 4.0 to solve a problem
- External Style Sheets can save a lot of work
- External Style Sheets are stored in CSS files

## 2. Where to define styles? How can we import CSS on a web page?

- Inline, used to style only a small piece of code:

  ```css
  <p style="color:blue"> Hello CSS </p>
  ```

- Internal style sheets are put between the

  ```css
  <style> p{color:blue} </style>
  ```

- External:

  ```css
  <link rel="stylesheet" type="text/css" href="style.css"
  ```

## 3. What is Property?

- The style that you are applying to a selector, e.g. border.

## 4. What is Selector?

- The way you declare which elements the styles should apply to. There are different kinds of selectors:

- **Class:** The most commonly used selector. E.g. “.cloudy” to select an element with classname cloudy. There can be more than 1 element with the same classname.

- **ID:** Use this sparingly. You cannot reuse an ID within the same page and used only to identify an element uniquely. E.g. <div id=lovelyweather></div>

- **Attribute Selector:** If you use any attribute other than class or id to identify an element in a stylesheet, you would be using Attribute Selectors. You can also do basic pattern matching within an attribute selector (so if you would like to do basic pattern matching for selectors using class or ID attributes, you would want to use attribute selectors).

  - Exam:

    ```css
    a[target="_blank"] {
      background-color: yellow;
    }
    ```

- **Pseudo-Classes:** Classes that are applied to elements based on information that is not present in the markup, _e.g. :first-child or :last-child._ Do note that the selectors are parsed from right to left. You cannot use section article:first-child to select the first occurrence of article, if the first child of section is h1 and not article. Likewise with the :nth-child, and :last-child pseudo-classes.

- **Pseudo-Elements:** Pseudo-elements differ from Pseudo-Classes in that they actually create an element in the document tree. This is almost the first instance of CSS modifying the HTML document tree. You should ideally use pseudo-elements with “::” instead of “:” (but most browsers accept “:” notation for CSS 2.1 pseudo-elements).
  - **Pseudo-elements are:** ::first-line, ::first-letter, ::before, ::after (See the demo for how pseudo-elements work).

## 5. What are Combinators?

- The selection of an element based on its occurrence in relation to another element (chosen by the choice of combinator: **whitespace, >, +, or ~**). _You can have:_

- Descendant Combinator
  - This is the most common usage, e.g. #lovelyweather h1.
- Child Combinator
  - Select an element if it is a direct child of another element (and not a grandchild of that element).
- Adjacent Sibling Combinator
  - The element that is immediately adjacent to another element.
- General Sibling Combinator

  - The element that is adjacent, but not immediately to another element.

  - Exam:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
        <div id="container">
          <h1>Title</h1>
          <p>This is a paragraph.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <h2>Subtitle</h2>
          <p>This is another paragraph.</p>
          <h1>Another Title</h1>
          <p>One more paragraph.</p>
        </div>
      </body>
    </html>
    ```

    ```css
    /* Descendant Combinator */
    #container h1 {
      color: blue;
    }

    /* Child Combinator */
    #container > ul {
      background-color: yellow;
    }

    /* Adjacent Sibling Combinator */
    h1 + p {
      font-weight: bold;
    }

    /* General Sibling Combinator */
    h1 ~ h2 {
      font-style: italic;
    }
    ```

## 6. What is the difference between class selectors and id selectors?

- An overall block is given to class selector while id selectors take only a single element differing from other element

## 7.What is CSS BEM?

- BEM stands for Block Element Modifier which is an explanation for its structure. **A Block** is a **standalone component(thành phần độc lập)** that is reusable across projects and acts as a "namespace" for sub components (Elements). **Modifiers** are used as flags when a **Block or Element** is in a certain state or is different in structure or style.

  ```css
  /* block component */
  /* block component */
  .block {
  }

  /* element */
  .block__element {
  }

  /* modifier */
  .block__element--modifier {
  }
  ```

- Exam:

  ```css
  <nav class="navbar">
    <a href="/" class="navbar__link navbar__link--active"></a>
    <a href="/" class="navbar__link"></a>
    <a href="/" class="navbar__link"></a>
  </nav>
  ```

- In this case, **navbar** is the Block, **navbar\_\_link** is an Element that makes no sense outside of the navbar component, and **navbar link--active** is a Modifier that indicates a different state for the **navbar\_\_link** Element.

- Since Modifiers are verbose, many opt to use is-\* flags instead as modifiers.

```css
    <a href="/" class="navbar__link is-active"></a>
```

- These must be chained to the Element and never alone however, or there will be scope issues.

  ```css
  .navbar__link.is-active {
  }
  ```

## 8. What are the advantages of External Style Sheets?

- We can create classes for reusing it in many documents.
- By using it, you can control the styles of multiple documents from one file.
- In complex situations, you can use selectors and grouping methods to apply styles.

## 9. What is the CSS Box model and what are its elements?

- The CSS box model is used to define the design and layout of elements of CSS.

- The elements are:
  - Margin
  - Border
  - Padding
  - Content

## 10. What is tweening?

- It is the process of generating intermediate frames between two images.

- It gives the impression that the first image has smoothly evolved into the second one.

- It is an important method used in all types of animations.

- In CSS3, Transforms (matrix, translate, rotate, scale etc.) module can be used to achieve tweening.

## 11. Explain the difference between visibility: hidden; and display: none;? What are the pros and cons of using display:none?

- **visibility:** hidden simply hides the element but it will occupy space and affect the layout of the document.

- **display:** none removes the element from the normal layout flow (causes DOM reflow). It will not affect the layout of the document nor occupy space

## What is re-flow?

- **"Re-flow"** in CSS is not a standard term, but it is often used to describe the process of recalculating the size and position of elements on a web page when there are changes in the structure or content of the page.

- When we change CSS properties, **add** or **remove elements**, or **alter the size** of an element on a web page, the browser needs to **recalculate** how elements interact with each other and their positions on the page.
- This process is referred to as "re-flow" and typically involves recalculating the size, position, and other properties of elements. The re-flow process can be computationally expensive and may impact the performance of a web page.

- Some actions that can trigger re-flow in CSS include:
  - Changing the size of an element (e.g., using width or height).
  - Modifying the content of an element (e.g., adding or removing text).
  - Altering layout-related properties (e.g., margin, padding, position, float).
  - Changing the display of elements (e.g., using display).
  - To optimize the performance of a web page, it's advisable to minimize unnecessary re-flows by using CSS efficiently and limiting changes to the structure and content of the page arbitrarily.

## 12. How does z-index relate to positioning? Describe z-index and how stacking context is formed?

- The **z-index** property specifies the stack order of elements.
- An element with a higher **z-index** stack order is always rendered in front of an element with a lower **z-index** stack order on the screen.
- **z-index** only works on positioned elements position: **absolute, position: relative, or position: fixed**. The default stack order of non-positioned elements is their order in the document.

### What is the purpose of the z-index and how is it used?

- The **z-index** helps specify the stack order of positioned elements that may overlap one another. The **z-index** default value is zero, and can take on either a positive or negative number.

- An element with a higher **z-index** is always stacked above than a lower index.

- **z-index** can take the following values:
  - **Auto:** Sets the stack order equal to its parents.
  - **Number:** Orders the stack order.
  - **Initial:** Sets this property to its default value (0).
  - **Inherit:** Inherits this property from its parent element.

## 13. How works absolute / relative / fixed / static position?

- **Absolute:** place an element exactly where you want to place it. absolute position is actually set relative to the element's parent. if no parent available then relatively place to the page itself (it will default all the way back up to the element).

- **Relative:** means "relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on it's positioning. It allows the use of z-index on the element and it limits the scope of absolutely positioned child elements. Any child element will be absolutely positioned within that block.

- **Fixed:** element is positioned relative to viewport or the browser window itself. viewport doesn't changed if u scroll and hence fixed element will stay right in the same position.

- **Static:** default for every single page element. The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control.

- **Sticky:** Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.

## 14. The difference between block / inline / inline-block element

- Elements with display: inline-block are like display: inline elements, but they can have a width and a height. That means that you can use an inline-block element as a block while flowing it within text or other elements.

- **Block:**

  - Respect all of those
  - Force a line break after the block element
  - Breaks the flow

- **Inline:**

  - Respect left & right margins and padding, but not top & bottom
  - Vannot have a width and height set
  - Margin and padding will push other elements horizontally not vertically
  - Allow other elements to sit to their left and right.
  - Elements do not break the flow

- **Inline-block:**

  - Allow other elements to sit to their left and right
  - Respect top & bottom margins and padding
  - Respect height and width

# 15. Which one would you prefer among px, em % or pt and why?

- **_It depends on what you are trying to do._**

- **px:** gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.

- **em:** maintains relative size. you can have responsive fonts. em is the width of the letter 'm' in the selected typeface. However, this concept is tricky. 1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px). em is cascade

- **rem:** is also a relative unit of **measurement(tương đối)**, but it always relies on the font size of the root element (typically the <html> element).
  When you use rem, the value 1rem is always equal to the font size of the root element, which is usually 16px (unless otherwise specified).

- **%:** sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. this is easy to use and does cascade. for example, if parent font-size is 20px and child font-size is 50%. child would be 10px.

## 16. What is pseudo element? What is pseudo class?

- **Pseudo elements** helps you to add **cosmetics contents(nội dung thẩm mỹ)**. **Pseudo elements** generates content where as pseudo class deals with state of the element.
- For example, we can style **:first-letter** of every paragraph.
- Similarly, **:first-line** and fancy stuff with **:before**, **:after**

## 17. Can you name the four types of @media properties?

- All, which applies to all media type devices
- Print, which only applies to printers
- Screen, which only applies to screens (desktops, tablets, mobile etc.)
- Speech, which only applies to screenreaders

## 18. What are the properties related to box model

- Technically, height, width, padding and border are part of box model and margin is related to it.

- Everything in a web page **is a box** where you can control size, position, background, etc. Each box/ content area is optionally surrounded by padding, border and margin. When you set height and width of an element, you set content **height and width.**

## 19. What does { box-sizing: border-box; } do? What are its advantages?

- Make every element in the document include the padding and border in the element's inner dimensions; making it easier to reason about the layout of elements on the page.

- By default, elements have box-sizing: content-box applied, and only the content size is being accounted for.

- **Box-sizing:** **border-box** changes how the width and height of elements are being calculated, border and padding are also being included in the calculation.

- The height of an element is now calculated by the content's height + vertical padding + vertical border width.

- The width of an element is now calculated by the content's width + horizontal padding + horizontal border width.

- Taking into account paddings and borders as part of our box model resonates better with how designers actually imagine content in grids.

## 20. What does _!important_ mean in CSS?

- It overrides the cascade and gives the style rule the highest precedence.
