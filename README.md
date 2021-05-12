# DOM Manupulation

> ### DOM -> Document Object Model
>
> 1. HTML page is a **D**ocument
> 2. HTML elements are **O**bjects
> 3. HTML tree structure is the **M**odel

- **console.log(document.all)** gives us all the elements in the html file in the type of **HTMLAllcollection**
- **console.log(document.imgaes)** gives us all the img in the html file in the type of **HTMLCollection**
- **console.log(document.links)** gives us all the links in the html file in the type of **HTMLCollection**
- **console.(document.forms)** gives all all the forms in the html file in the type of **HTMLCollection**.

> ### Some document object methods to find/select/get document elements.
>
> - **To Get element by id**:
>
>   `document.getElementById(id)`
>
> - **To get elements by class name** which gives us all the elements which has this same className in the type of HTMLCollection.
>
>   `document.getElementsByClassName(className)`
>
> - **To get elements by tag name** which gives us all the elements which has this same tagName in the type of HTMLCollection.
>
>   `document.getElementsByTagName(tagName)`
>
> - **To get element using any of the selector(ex. classSelector, id, tagName) using only one mathod** which gives the first matched element.
>
>   `document.querySelector(curresponding selector with its sign as prefix)`
>
>   e.g. `document.querySelector(".className" | "#id" | "tagName" )`
>
> - **To get element using any of the selector(ex. classSelector, tagName) using only one mathod** which gives all the elements which has this same tagName or classname in the type of NODEList.
>
>   `document.querySelectorAll(curresponding selector with its sign as prefix)`
>
>   e.g `document.querySelectorAll(".classname" | "tagName") `
