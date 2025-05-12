// Function to load and insert HTML content
function includeHTML(className, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      // Get all elements with the specified class
      const elements = document.getElementsByClassName(className);

      // Insert the HTML into each matching element
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = data;
      }
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

// Load the components when the page loads
window.onload = function () {
  includeHTML("include-nav", "/components/nav.html");
};
