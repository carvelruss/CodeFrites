/**
* Website Name: CodeFrites v1.0.0
* Author: carvelruss.com
*/

// Footer data object with dynamic content
const footerData = {
  brandLogo: 'assets/img/official-logo.svg',
  brandName: 'CodeFrites',
  brandDescription: "At CodeFrites, we're not just your ordinary website development company; we bring a unique and personal touch to every project we undertake.",
  companyNumber: '+63 909 135 2732',
  companyEmail: 'friesquad@codefrites.com',
  storysetAttribute: 'https://storyset.com/online',
  socialLinks: {
    facebook: '#',
    instagram: '#',
    // Add or remove social links here as needed
  },
  usefulLinks: [
    { title: 'Home', url: '/index.html' },
    { title: 'About us', url: '/pages/useful-links/about.html' },
    { title: 'Services', url: 'services.html' },
    { title: 'Portfolio', url: 'portfolio.html' },
    { title: 'Articles', url: 'articles.html' },
    { title: 'Terms of service', url: 'terms-of-service.html' },
    { title: 'Privacy policy', url: 'privacy-policy.html' },
    // Add or links here as needed
  ],
  ourServices: [
    { title: 'White-Label Web Development', url: 'white-label-web-development.html' },
    { title: 'CMS Integration', url: 'cms-integration.html' },
    { title: 'E-commerce Development', url: 'ecommerce-development.html' },
    { title: 'Front-End Development', url: 'frontend-development.html' },
    { title: 'Back-End Development', url: 'backend-development.html' },
    { title: 'Affiliates Services', url: 'affiliates-services.html' },
    // Add or remove links here as needed
  ]
};

// Function to set content dynamically
function setContent(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = content;
  }
}

// Function to set link dynamically
function setLink(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    element.setAttribute('href', url);
  }
}

// Function to set social network links dynamically
function setSocialLinks(socialLinks) {
  const socialLinksContainer = document.getElementById('footer-social-links');
  if (socialLinksContainer) {
    let socialLinksHtml = '';
    for (const platform in socialLinks) {
      socialLinksHtml += `<a href="${socialLinks[platform]}" class="${platform}"><i class="bx bxl-${platform}"></i></a>`;
    }
    socialLinksContainer.innerHTML = socialLinksHtml;
  }
}

// Function to set useful links dynamically
function setUsefulLinks(usefulLinks) {
  const linksContainer = document.getElementById('useful-links');
  if (linksContainer) {
    let linksHtml = '';
    usefulLinks.forEach(link => {
      linksHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${link.url}">${link.title}</a></li>`;
    });
    linksContainer.innerHTML = linksHtml;
  }
}

// Function to set our services links dynamically
function setOurServices(ourServices) {
  const servicesContainer = document.getElementById('our-services');
  if (servicesContainer) {
    let servicesHtml = '';
    ourServices.forEach(service => {
      servicesHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${service.url}">${service.title}</a></li>`;
    });
    servicesContainer.innerHTML = servicesHtml;
  }
}

// Function to initialize dynamic content
function initFooter() {
  // Set footer content
  setContent('footer-logo-container', `<img src="${footerData.brandLogo}" alt="${footerData.brandName}">`);
  setContent('footer-brandName', footerData.brandName);
  setContent('brandDescription', footerData.brandDescription);
  setContent('companyNumber', `<strong>Phone:</strong> <a href="tel:${footerData.companyNumber}">${footerData.companyNumber}</a>`);
  setContent('companyEmail', `<strong>Email:</strong> <a href="mailto:${footerData.companyEmail}">${footerData.companyEmail}</a>`);
  setContent('storysetAttribute', `<p>Storyset: <a href="${footerData.storysetAttribute}">${footerData.storysetAttribute}</a></p>`);
  setContent('creditbrandName', `<strong>${footerData.brandName}</strong>`)

  // Set social links
  setSocialLinks(footerData.socialLinks);

  // Set useful links
  setUsefulLinks(footerData.usefulLinks);

  // Set our services links
  setOurServices(footerData.ourServices);
}

// Call the initFooter function when the page loads
window.onload = initFooter;