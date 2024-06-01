In JavaScript, the Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects that can be manipulated programmatically to change the content, structure, and style of a webpage. Here are some main methods and properties you should know:

1. **getElementById**: Retrieves an element by its ID.
   
   ```javascript
   const element = document.getElementById("myElementId");
   ```

2. **getElementsByClassName**: Retrieves a collection of elements with the given class name.
   
   ```javascript
   const elements = document.getElementsByClassName("myClassName");
   ```

3. **getElementsByTagName**: Retrieves a collection of elements with the given tag name.
   
   ```javascript
   const elements = document.getElementsByTagName("div");
   ```

4. **querySelector**: Retrieves the first element that matches a specific CSS selector.
   
   ```javascript
   const element = document.querySelector(".myClassName");
   ```

5. **querySelectorAll**: Retrieves a list of elements that match a specific CSS selector.
   
   ```javascript
   const elements = document.querySelectorAll("div.myClassName");
   ```

6. **createElement**: Creates a new element.
   
   ```javascript
   const newElement = document.createElement("div");
   ```

7. **appendChild**: Appends a node as the last child of a node.
   
   ```javascript
   parentElement.appendChild(newElement);
   ```

8. **removeChild**: Removes a child node from the DOM.
   
   ```javascript
   parentElement.removeChild(childElement);
   ```

9. **addEventListener**: Attaches an event handler to the specified element.
   
   ```javascript
   element.addEventListener("click", myFunction);
   ```

10. **innerHTML**: Gets or sets the HTML content of an element.
    
    ```javascript
    element.innerHTML = "<p>New content</p>";
    ```

These are some fundamental methods and properties of the DOM. There are many more methods and properties available for more advanced DOM manipulation.
