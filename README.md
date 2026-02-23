### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: the getElementById selects only single element, and return only the single element.  getElementsByClassName select multiple elements as per the class name. It return HTTMLCollection. querySelector selects the first element only, adn it return the first element. querySelectorAll selects multiple element as per the selector. It return NodeList. 
### 2. How do you create and insert a new element into the DOM?
Answer: First I create an empty div into the HTML. after that, I will get the empty element by id in the script. and then I create the element using document.createElement(), and then I add HTML using createdElment.innerHTML = ``. and then I insert using appendChild.
### 3. What is Event Bubbling? And how does it work?
Answer: The Event Bubbling: When an even happen on a child element, it first runs on the elment, then it bubbles-up to its parent, then grandparent, and continues until document. 

it works like : child >> parent >> grandparent >> document
### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: when need to add multiple Event Listner to the child elements, insteading of adding multiple event listner to the child, can be add event listner to the parent element and can use event bubling to handle events. It's useful because can use one Event Listner instead of many, works with dynamic elements and less repetitive code. 
### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser's default behavior but it does not stop bubbling.  stopPropagation() stops bubbling up, but does not stop browser default behavior. 