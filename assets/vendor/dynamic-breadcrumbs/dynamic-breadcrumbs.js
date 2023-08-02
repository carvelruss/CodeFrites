/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

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
  const breadcrumbMapping = [
    { pageName: 'index', text: 'Home', url: 'index.html' },
    { pageName: 'about', text: 'About Us', url: 'about.html' },
    { pageName: 'services', text: 'Services', url: 'services.html' },
    { pageName: 'portfolio', text: 'Portfolio', url: 'portfolio.html' },
    { pageName: 'concept-first', text: 'Concept First', url: 'concept-first.html', parentPage: 'portfolio' },
    // Add more pages link here as needed
  ];

  // Set the <h2> title based on the page name
  const currentPageInfo = breadcrumbMapping.find((item) => item.pageName === currentPageName);
  pageTitleElement.textContent = currentPageInfo ? currentPageInfo.text : 'Undefined - Please fix the error!';

  // Generate the breadcrumbs based on the page name
  const breadcrumbs = [];

  // Always include the "Home" link
  breadcrumbs.push(breadcrumbMapping.find((item) => item.pageName === 'index'));

  // Add the current page and its parent pages to the breadcrumbs
  if (currentPageInfo) {
    if (currentPageInfo.parentPage) {
      const parentPageInfo = breadcrumbMapping.find((item) => item.pageName === currentPageInfo.parentPage);
      if (parentPageInfo) {
        breadcrumbs.push(parentPageInfo);
      }
    }
    breadcrumbs.push(currentPageInfo);
  }

  const breadcrumbLinks = breadcrumbs.map((item, index, array) => {
    // Check if it's the "Home" link or other pages
    if (index === 0 || index === array.length - 2) {
      return `<li><a href="${item.url}">${item.text}</a></li>`;
    } else {
      return `<li>${item.text}</li>`;
    }
  });

  breadcrumbListElement.innerHTML = breadcrumbLinks.join('');
}

// Call the function to generate the <h2> title and breadcrumbs
generatePageTitleAndBreadcrumbs();