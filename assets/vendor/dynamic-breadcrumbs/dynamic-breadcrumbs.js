// Function to extract the page name from the URL
function getPageNameFromURL() {
  const path = window.location.pathname; // Get the current URL path
  const parts = path.split('/'); // Split the path by slashes
  return parts[parts.length - 1].replace('.html', ''); // Return the last part as the page name without .html
}

// Function to generate the <h2> title and breadcrumbs based on the page name
function generatePageTitleAndBreadcrumbs() {
  const pageTitleElement = document.getElementById('pageTitle');
  const breadcrumbListElement = document.getElementById('breadcrumbList');

  const currentPageName = getPageNameFromURL();
  const breadcrumbMapping = {
    index: { text: 'Home', url: 'index.html' },
    about: { text: 'About Us', url: 'about.html' },
    services: { text: 'Services', url: 'services.html' },
    // Add more pages here as needed
  };

  // Set the <h2> title based on the page name
  switch (currentPageName) {
    case 'index':
      pageTitleElement.textContent = 'Home';
      break;
    case 'about':
      pageTitleElement.textContent = 'About Us';
      break;
    case 'services':
      pageTitleElement.textContent = 'Services';
      break;
    // Add more cases here for other pages
    default:
      pageTitleElement.textContent = 'Inner Page';
  }

  // Generate the breadcrumbs based on the page name
  const breadcrumbs = [];
  const breadcrumbInfo = breadcrumbMapping[currentPageName];
  if (breadcrumbInfo) {
    breadcrumbs.push(breadcrumbInfo);
  }

  const breadcrumbLinks = breadcrumbs.map((item) => {
    return `<li><a href="${item.url}">${item.text}</a></li>`;
  });

  breadcrumbListElement.innerHTML = breadcrumbLinks.join(' > ');
}

// Call the function to generate the <h2> title and breadcrumbs
generatePageTitleAndBreadcrumbs();