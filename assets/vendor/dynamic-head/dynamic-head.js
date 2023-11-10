// dynamicHead.js

// Function to dynamically create head elements for tracking codes
function createDynamicHead() {
  // Google Analytics gtag.js
  var gtagScript = document.createElement("script");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-DMGJFG28FB";
  gtagScript.async = true;

  var gtagConfigScript = document.createElement("script");
  gtagConfigScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DMGJFG28FB');
  `;

  // Append elements to head
  document.head.appendChild(gtagScript);
  document.head.appendChild(gtagConfigScript);
}

// Call the function to create dynamic head elements
createDynamicHead();
