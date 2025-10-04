---
course: Internet Programming and Applications I
code: CP 221
year: 2020-2021
semester: TEST 1
exam_type: Test
difficulty: Medium
title: IP1 (CP 221) TEST1 2020-2021 SOLVED INTERACTIVE
description: Solved interactive TEST 1 exam for Internet Programming I covering fundamental web technologies and programming concepts
topics:
  - HTML5
  - CSS3
  - JavaScript
  - DOM Manipulation
  - Forms Validation
  - Event Handling
  - Responsive Design
  - Basic Web APIs
tags:
  - internet-programming
  - university-exam
  - cp221
  - udom
  - solved
  - interactive
aliases:
  - Internet Programming I Final Exam 2020-21
  - CP221 TEST 1 Solved Paper
  - IP1 Interactive Solutions
institution: University of Dodoma
status: Solved
interactivity: true
cssclasses: exam-note solved-exam interactive
---
#### **Internet Programming and Applications  - Test**

**CP 221 Test 1 2021**

---

### **QUESTION ONE: HTML5 Element Matching**

**HTML5 introduces a number of new elements and attributes tag:  help in building a modern website. Match the HTML5 element in   Column A with its corresponding description in Column B.**
(0.5 Marks Each)

| Column A    | Column B                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| I. Section  | A. This tag can be used to associate a caption together with some embedded content, such as a graphic or video.                   |
| II. Article | B. Represents a measurement, such as disk usage.                                                                                  |
| III. Aside  | C. Improve the performance of our websites by avoiding the need to download images off the network.                               |
| IV. Header  | D. Element represents a run of text in one document marked or highlighted for reference purposes.                                 |
| V. Footer   | E. This tag represents a generic document or application. It can be used together with labels to indicate the document structure. |
| VI. Nav     | F. This tag can be used to mark up a conversation.                                                                                |
| VII. Figure | G. This tag represents a section of the document intended for naviagation.                                                        |
| VIII. Mark  | H. This tag contain information about the author, copyright information, etc.                                                     |
| IX. Canvas  | I. Defines a video file.                                                                                                          |
| X. Meter    | J. Represents some type of output, such as from a calculation done through scripting.                                             |
|             | K. This tag represents the header of a section.                                                                                   |
|             | L. This tag represents an independent piece of content of a document, such as a blog entry or newspaper.                          |
|             | M. This tag represents a piece of content that is only slightly related to the rest of the page.                                  |


> [!Tip]- Answer (Click to show)
> **i. Section** → **E. This tag represents a generic document or application. It can be used together with h1-h6 to indicate the document structure.**  
> **ii. Article** → **L. This tag represents an independent piece of content of a document, such as a blog entry or newspaper.**  
> **iii. Aside** → **M. This tag represents a piece of content that is only slightly related to the rest of the page.**  
> **iv. Header** → **K. This tag represents the header of a section.**  
> **v. Footer** → **H. This tag contain information about the author, copyright information, etc.**  
> **vi. Nav** → **G. This tag represents a section of the document intended for navigation.**  
> **vii. Figure** → **A. This tag can be used to associate a caption together with some embedded content, such as a graphic or video.**  
> **viii. Mark** → **D. Element represents a run of text in one document marked or highlighted for reference purposes.**  
> **ix. Canvas** → **C. Improve the performance of our websites by avoiding the need to download images off the network.**  
> **x. Meter** → **B. Represents a measurement, such as disk usage.**


---

### **QUESTION TWO: Float Property Rendering**

**Consider the following HTML code fragment, which uses the float property for layout. Show how the text will appear when rendered in a browser.**  
*(5 Marks)*

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test_One</title>
    <style type="text/css">
    span{
        float: left;
        font-size: 400%;
    }
    </style>
</head>
<body>
<p>
    <span>T</span>
    Welcome to Web Development<br>
    Welcome to Web Development<br>
    Welcome to Web Development<br>
</p>
</body>
</html>
```

> [!Tip]- Answer (Click to show)
> The large letter **"T"** (floated left) will cause the first line **"Welcome to Web Development"** to wrap around its right side. The next two lines will appear below the floated "T", starting from the left margin.
>
> **Rendered Output:**
> ```
> T   Welcome to Web Development
> Welcome to Web Development
> Welcome to Web Development
> ```

---

### **QUESTION THREE: CSS Rules**

**i. Write a CSS rule that changes the color of all elements containing attribute `id="Green-Move"` to green and shift them down 25 pixels and right 15 pixels.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> #Green-Move {
>   color: green;
>   position: relative;
>   top: 25px;
>   left: 15px;
> }
> ```



**ii. Write a layout template that contains two columns. Use divs for each layout component, and use float to line up the columns side by side. Give each component a border and/ or a background color so you can see where your divs are.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
> <style>
>   .column {
>     width: 48%;
>     float: left;
>     border: 1px solid black;
>     padding: 10px;
>     margin: 1%;
>     box-sizing: border-box;
>   }
>   .col1 {
>     background-color: red;
>   }
>   .col2 {
>     background-color: yellow;
>   }
>   .clear {
>     clear: both;
>   }
> </style>
> </head>
> <body>
>   <div class="column col1">Column 1 Content</div>
>   <div class="column col2">Column 2 Content</div>
>   <div class="clear"></div>
> </body>
> </html>
> ```



**iii. Several divs have a class of even. Write a style rule (as it would appear in an external stylesheet) that gives each of these black text on a red background using 14px sans-serif font, and the borders should be 1 pixel solid black lines all around.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> .even {
>   color: black;
>   background-color: red;
>   font-family: sans-serif;
>   font-size: 14px;
>   border: 1px solid black;
> }
> ```

---

**END OF TEST**