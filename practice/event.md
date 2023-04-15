## What is an event

- an event is an action a user (or browser) has taken
  examples: hovers on element, presses a key, click a button, page finishes loading, form submit
- event take place in browser

### how do we use events? Javascript

### important: Web events are not part of the core JavaScript language - they are given to us by

the dom api built into the browser

## 2 things need to understand working with events

1. listener - listen out for the event
2. handler - each event (click, keypress, etc) needs and event handler - an event handler is a block of code that runs when the event happens or fires

## There are 3 types of listeners

1. inline event listeners
   - `<button onclick="surprise()">surprise me</button>` like this, then creating function in js
2. event properties
   - first select element then access event of that element like= btn.onclick = function() {}
3. event listeners
   - add an event to an element using addEventListeners('listener', 'handler function')
   - btn.addEventListener('click', function() {alert('surprise!')})

## 2 phases of an event

1. event capturing phase - the event starts at the root, and works it way to the event **target**
2. event bubbling phase - the event starts at the event **target**, and bubbles up its way back to the **root**

- When an event occurs suppose a click event is fired on a button#button1 element
- it doesn't originate at button#button1 element rather
- all events originate at the ROOT which is window object
- then it will travel down the dom structure until it hits the event target from where the event fired **This is called event capturing phase**
- and then again the event going to travel up or returns back to the ROOT
- any event handler get called **This is called event bubbling phase**
