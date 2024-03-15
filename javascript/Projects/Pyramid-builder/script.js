// Define a function named buildPyramid
function buildPyramid() {
    // Gets the container element where the pyramid will be built
    var pyramidContainer = document.getElementById('pyramidContainer');
   
    // Calculates the height of the pyramid by counting the number of existing rows and adding 1
    var pyramidHeight = pyramidContainer.children.length + 1;
  
    // Creates a new div element to represent a row of the pyramid
    var pyramidRow = document.createElement('div');
   
    // Adds a CSS class to the row element for styling purposes
    pyramidRow.className = 'pyramid-row';
  
   
    // Loop to create blocks for each row of the pyramid
    for (var i = 0; i < pyramidHeight; i++) {
      // Create a new div element to represent a block of the pyramid
      var pyramidBlock = document.createElement('div');
      // Add a CSS class to the block element for styling purposes
      pyramidBlock.className = 'pyramid-block';
      // Append the block element to the current row of the pyramid
      pyramidRow.appendChild(pyramidBlock);
    }
  
    // Append the row element with blocks to the container element
    pyramidContainer.appendChild(pyramidRow);
  }