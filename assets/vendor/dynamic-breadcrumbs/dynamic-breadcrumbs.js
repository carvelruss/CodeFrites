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
    { pageName: "our-work", text: "Our Work", url: "/pages/our-work.html" },
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

    //Our Work
    {
      pageName: "concept-first",
      text: "Concept First",
      url: "/pages/our-work/concept-first.html",
      parentPage: "our-work",
    },
    {
      pageName: "achievers-dream",
      text: "Achievers Dream",
      url: "/pages/our-work/achievers-dream.html",
      parentPage: "our-work",
    },
    {
      pageName: "ad-plus",
      text: "Achievers Dream Student Portal",
      url: "/pages/our-work/ad-plus.html",
      parentPage: "our-work",
    },
    {
      pageName: "northern-realty",
      text: "Northern Realty",
      url: "/pages/our-work/northern-realty.html",
      parentPage: "our-work",
    },
    {
      pageName: "solar-x-charge",
      text: "Solar X-Charge",
      url: "/pages/our-work/solar-x-charge.html",
      parentPage: "our-work",
    },
    {
      pageName: "advantedge-films",
      text: "AdvantEdge Films",
      url: "/pages/our-work/advantedge-films.html",
      parentPage: "our-work",
    },
    {
      pageName: "thunderbeeva",
      text: "Thunderbee VA",
      url: "/pages/our-work/thunderbeeva.html",
      parentPage: "our-work",
    },
    {
      pageName: "grinders-choice",
      text: "Grinder`s Choice",
      url: "/pages/our-work/grinders-choice.html",
      parentPage: "our-work",
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
