/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

// Function to extract the page name from the URL
function getPageNameFromURL() {
  const path = window.location.pathname; // Get the current URL path
  const parts = path.split("/"); // Split the path by slashes
  return parts[parts.length - 1].replace(".html", ""); // Return the last part as the page name without .html
}

// Function to generate the <h2> title and breadcrumbs based on the page name
function generatePageTitleAndBreadcrumbs() {
  const pageTitleElement = document.getElementById("pageTitle");
  const breadcrumbListElement = document.getElementById("breadcrumbList");

  const currentPageName = getPageNameFromURL();
  const breadcrumbMapping = [
    //Header
    { pageName: "index", text: "Home", url: "/index.html" },
    { pageName: "about", text: "About Us", url: "/pages/about.html" },
    { pageName: "services", text: "Services", url: "/pages/services.html" },
    { pageName: "portfolio", text: "Portfolio", url: "/pages/portfolio.html" },
    { pageName: "articles", text: "Articles", url: "/pages/articles.html" },
    { pageName: "contact", text: "Contact", url: "/pages/contact.html" },

    //Other Pages
    {
      pageName: "start-conversation",
      text: "Start Conversation",
      url: "/pages/start-conversation.html",
    },
    {
      pageName: "request-quotation",
      text: "Project Quotation",
      url: "/pages/request-quotation.html",
    },
    { pageName: "thank-you", text: "Thank You", url: "/pages/thank-you.html" },

    //Services
    {
      pageName: "white-label-web-development",
      text: "White-Label Web Development",
      url: "/pages/services/white-label-web-development.html",
      parentPage: "services",
    },
    {
      pageName: "cms-integration",
      text: "CMS Integration",
      url: "/pages/services/cms-integration.html",
      parentPage: "services",
    },
    {
      pageName: "ecommerce-development",
      text: "E-commerce Development",
      url: "/pages/services/ecommerce-development.html",
      parentPage: "services",
    },
    {
      pageName: "frontend-development",
      text: "Front-End Development",
      url: "/pages/services/frontend-development.html",
      parentPage: "services",
    },
    {
      pageName: "backend-development",
      text: "Back-End Development",
      url: "/pages/services/backend-development.html",
      parentPage: "services",
    },
    {
      pageName: "affiliates-services",
      text: "Affiliates Services",
      url: "/pages/services/affiliates-services.html",
      parentPage: "services",
    },

    //Portfolio
    {
      pageName: "concept-first",
      text: "Concept First",
      url: "/pages/portfolio/concept-first.html",
      parentPage: "portfolio",
    },
    {
      pageName: "achievers-dream",
      text: "Achievers Dream",
      url: "/pages/portfolio/achievers-dream.html",
      parentPage: "portfolio",
    },
    {
      pageName: "ad-plus",
      text: "Achievers Dream Student Portal",
      url: "/pages/portfolio/ad-plus.html",
      parentPage: "portfolio",
    },
    {
      pageName: "northern-realty",
      text: "Northern Realty",
      url: "/pages/portfolio/northern-realty.html",
      parentPage: "portfolio",
    },
    {
      pageName: "solar-x-charge",
      text: "Solar X-Charge",
      url: "/pages/portfolio/solar-x-charge.html",
      parentPage: "portfolio",
    },
    {
      pageName: "advantedge-films",
      text: "AdvantEdge Films",
      url: "/pages/portfolio/advantedge-films.html",
      parentPage: "portfolio",
    },
    {
      pageName: "thunderbeeva",
      text: "Thunderbee VA",
      url: "/pages/portfolio/thunderbeeva.html",
      parentPage: "portfolio",
    },
    {
      pageName: "grinders-choice",
      text: "Grinder`s Choice",
      url: "/pages/portfolio/grinders-choice.html",
      parentPage: "portfolio",
    },

    // Add more pages link here as needed
  ];

  // Set the <h2> title based on the page name
  const currentPageInfo = breadcrumbMapping.find(
    (item) => item.pageName === currentPageName
  );
  pageTitleElement.textContent = currentPageInfo
    ? currentPageInfo.text
    : "Undefined - Please fix the error!";

  // Generate the breadcrumbs based on the page name
  const breadcrumbs = [];

  // Always include the "Home" link
  breadcrumbs.push(breadcrumbMapping.find((item) => item.pageName === "index"));

  // Add the current page and its parent pages to the breadcrumbs
  if (currentPageInfo) {
    if (currentPageInfo.parentPage) {
      const parentPageInfo = breadcrumbMapping.find(
        (item) => item.pageName === currentPageInfo.parentPage
      );
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

  breadcrumbListElement.innerHTML = breadcrumbLinks.join("");
}

// Call the function to generate the <h2> title and breadcrumbs
generatePageTitleAndBreadcrumbs();
