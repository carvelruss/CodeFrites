// dynamicHead.js

// Function to dynamically include head content
function includeHeadContent() {
  var headContent = document.createElement("script");
  headContent.src = "/head/head.html";
  headContent.async = true;

  // Append element to head
  document.head.appendChild(headContent);
}

// Call the function to include head content
includeHeadContent();
