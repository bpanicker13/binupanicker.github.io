Udacity Front-End Nanodegree
Website Optimization Project
____________________________

Instructions
------------
To view the portfolio website download all the files and open index.html in your browser.

To view the pizza website download all of the files and open views/pizza.html in your browser.

You can view the site on my github page by using the links below:

To view the portfolio site on github pages go to http://bpanicker13.github.io/Udacity-Website-Optimization
To view the pizza site on github pages go to http://bpanicker13.github.io/Udacity-Website-Optimization/views/pizza.html

Website Optimizations to Pizza Site
-----------------------------------
Optimized Images using compression, Minified CSS and JavaScript, Move JavaScript to end of HTML, and Added async to script tag.

Modified the code to calculate the number of pizzas needed to fill the web page based on browser inner dimensions.

Moved the document.body request out of for loop in the changePizzaSizes and updatePositions functions. This prevents the browser from having to render the page every time the loop iterates.

Cached the needed DOM elements so that the browser isn't querying the DOM every time the for loops are iterated in the updatePositions and changePizzaSizes functions

Changed all instances of querySelector to the more efficient getElementById and getElementByClassName depending on whether a class or id is needed.

Minimized the use of the document object, which is important when optimizing JavaScript. 

Created an additional loop in the changePizzaSizes function. This helps prevent the browser from having to render the page continuously in-between setting the styles.

Resources used while completing the project
-------------------------------------------
CSS Minifier http://cssminifier.com/
JavaScript Minifier http://javascript-minifier.com/
Optimizing Performance https://developers.google.com/web/fundamentals/performance/