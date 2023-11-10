// Function to dynamically include head content
function includeHeadContent() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/head/headContent.html", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Create a script element and set its content
      var headContent = document.createElement("script");
      headContent.innerHTML = xhr.responseText;

      // Append element to head
      document.head.appendChild(headContent);
    }
  };

  xhr.send();
}

// Call the function to include head content
includeHeadContent();
