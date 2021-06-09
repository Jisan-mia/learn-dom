# DOM Manupulation

### DOM -> Document Object Model

1.  HTML page is a **D**ocument
2.  HTML elements are **O**bjects
3.  HTML tree structure is the **M**odel

- **console.log(document.all)** gives us all the elements in the html file in the type of **HTMLAllcollection**
- **console.log(document.imgaes)** gives us all the img in the html file in the type of **HTMLCollection**
- **console.log(document.links)** gives us all the links in the html file in the type of **HTMLCollection**
- **console.(document.forms)** gives all all the forms in
  the html file in the type of **HTMLCollection**.

---

<br />

### Some document object methods to find/select/get document elements.

- **To Get element by id**:

  `document.getElementById(id)`

- **To get elements by class name** which gives us all the elements which has this same className in the type of HTMLCollection.

  `document.getElementsByClassName(className)`

- **To get elements by tag name** which gives us all the elements which has this same tagName in the type of HTMLCollection.

  `document.getElementsByTagName(tagName)`

- **To get element using any of the selector(ex. classSelector, id, tagName) using only one mathod** which gives the first matched element.

  `document.querySelector(curresponding selector with its sign as prefix)`

  e.g. `document.querySelector(".className" | "#id" | "tagName" )`

- **To get element using any of the selector(ex. classSelector, tagName) using only one mathod** which gives all the elements which has this same tagName or classname in the type of NODEList.

  `document.querySelectorAll(curresponding selector with its sign as prefix)`

  e.g `document.querySelectorAll(".classname" | "tagName") `

---

</br>

### DOM Hierarchy Traversing (Parent/Child relation):

> querySelector finds element from top to bottom <br>
> closest finds element from bottom to top

- Find element from parent to children.:

  `const parent = document.querySelector(parent)`<br />
  `cosnt children = parent.children`<br />

- Find element from grandParent to children:

  `cosnt grandParent = document.querySelector(grandParent)`<br />
  `const children = grandParent.querySelectorAll(children)`<br>

- Find element from children to parent:

  `const children = document.querySelector(children)`<br />
  `const parent = children.parentElement`

- Find element from children to grandParent:

  `const grandParent = children.closest(grandParent)`

- Finding sibling elements
- Find next immediate sibling

  `cosnt childrenOne = document.querySelector(childrenOne)`<br />
  `cosnt childrenTwo = childrenOne.nextElementSibling`

- Find previous immeidate sibling

  `const childrenTwo = document.querySelector(childrenTwo)` <br />
  `const childrenOne = childrenTwo.previousElementSibling`

---

<br>

### Manupulate the **DOM**

> `appendChild()` can only take one htel element as argument <br /> > `append()` can take both element and others(text, etc) also maltiple elements as an argument.

- Creating an element

  `const elementWantToCreate = document.createElement(tagNameWantToCreate)` <br />

  e.g. `const divElement = document.createElement('div') ` <br >
  `const paragraph = document.createElement('p')`

- add className to element using dom

  `element.className = className ` <br />
  e.g. `divElement.className = 'item' `

- set attribute using dom

  `element.setAttribute(attributeName, attributeValue)` <br />
  e.g. `divElement.setAttribute('id', 'firstItem')`

- append created element or element at the end of a container

  `container.appendChild(elem)` <br />
  e.g. `container.appendChild(divElement)`

- apend element before a childelement within container

  `const childElm = document.querySelector('h2Elm') `
  `container.insertBefore(divElement, childElm)`

- changing HTML content using dom

  `const element = document.getElementById(id)`
  `element.innerHTML = newHTMl` <br />
  or `element.innerText = newText`

- changing html elements style using dom

  `element.style.propertyName = propertyValue`

---

<br>

### Listening to **DOM** Events:

> DOM allows Javascript to react on HTML events <br />
> A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

- trigger an action when someone click an element

  `element.addEventListener(eventName, a function for what to do when this event triggered)` <br />
  `element.addEventListener('click', (event) => {console.log(event)}) `

**Examples of HTML events:**

- When a user clicks the mouse
- When the mouse moves over an element
- When a web page has loaded
- When an image has been loaded
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

**Some common HTML events**
| Event | Description |
| --- | --- |
| click | when an user clicks an element |
| dblclick | when the user double click an element |
| input | when an element gets user input |
| blur | when an element losses blur |
| focus | when an element gets focus |
| mouseenter | when the pointer is moved onto an element |
| keydown | when a user is pressing a key |
| keyup | when a user releases a key |

<br />

## Project Overview

> The project was created using most of the DOM methods.

- An user can add todo to the active TODO ul
- From the active todo ul user can
  - toggle todos from active to complete
  - edit a todo and
  - delete a todo
- In the complete todo ul section user can
  - toggle todos from complete to active and
  - delete todos

### Image Overiew

![todojisan](https://user-images.githubusercontent.com/61211600/121383081-fe96a780-c968-11eb-9ce1-b752c72c08c3.png)

### Finally, This would not have been possible to document this wonderful Topic about JS DOM without **Sumit** bhaiya's guideline.

**Sumit** bhaiya's Playlist about JS DOM

- [Play with DOM - Bangla ( বাংলা ) DOM Tutorial](https://www.youtube.com/watch?v=XY96d0vEdFk&list=PLHiZ4m8vCp9MJDxMOzhYVuTrO1b5n-Tq_)
