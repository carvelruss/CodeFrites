// dynamicHead.js

// Function to dynamically create head elements for tracking codes
function createDynamicHead() {
  // Facebook Pixel
  var facebookPixelScript = document.createElement("script");
  facebookPixelScript.src = "your_facebook_pixel_script_url";
  facebookPixelScript.async = true;

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

  // Google Tag Manager
  var gtmScript = document.createElement("script");
  gtmScript.src = "your_google_tag_manager_script_url";
  gtmScript.async = true;

  // Append elements to head
  document.head.appendChild(facebookPixelScript);
  document.head.appendChild(gtagScript);
  document.head.appendChild(gtagConfigScript);
  document.head.appendChild(gtmScript);
}

// Call the function to create dynamic head elements
createDynamicHead();
