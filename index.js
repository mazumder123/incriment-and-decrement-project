
document.addEventListener("DOMContentLoaded", function() {
    const countDisplay = document.getElementById("countDisplay");
    const errorDisplay = document.getElementById("errorDisplay");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const clearButton = document.getElementById("clearButton");
    
    let count = 0;
  
    function updateCount() {
      countDisplay.innerHTML = count;
      if (count === 0) {
        decrementButton.disabled = true;
        clearButton.style.display = "none";
        errorDisplay.style.display = "block";
      } else {
        decrementButton.disabled = false;
        clearButton.style.display = "block";
        errorDisplay.style.display = "none";
      }
    }
  
    incrementButton.addEventListener("click", function() {
      count++;
      updateCount();
    });
  
    decrementButton.addEventListener("click", function() {
      if (count > 0) {
        count--;
        updateCount();
      }
    });
  
    clearButton.addEventListener("click", function() {
      count = 0;
      updateCount();
    });
  
    // Initial count update
    updateCount();
  });
  