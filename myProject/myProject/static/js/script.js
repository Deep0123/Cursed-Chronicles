function animateText() {
    $("#intro-text > h2")
      .css("opacity", 1)
      .lettering("words")
      .children("span")
      .lettering()
      .children("span")
      .lettering();
  }
  
  $(document).ready(function () {
    // Call the function initially
    animateText();
  
    // Set an interval to repeat the function every X milliseconds
    setInterval(animateText, 46000); // Change 5000 to your desired interval in milliseconds
  });
  