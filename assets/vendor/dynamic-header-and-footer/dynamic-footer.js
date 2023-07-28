// Footer data object with dynamic content
const footerData = {
  brandLogo: 'assets/img/codefrites-temp-logo.svg',
  brandName: 'CodeFrites',
  brandDescription: "At CodeFrites, we're not just your ordinary website development company; we bring a unique and personal touch to every project we undertake.",
  companyNumber: '+63 909 135 2732',
  companyEmail: 'friesquad@codefrites.com',
  socialLinks: [
    { platform: 'twitter', url: '#' },
    { platform: 'facebook', url: '#' },
    { platform: 'instagram', url: '#' },
    { platform: 'linkedin', url: '#' },
  ],
  usefulLinks: [
    { title: 'Home', url: '#' },
    { title: 'About us', url: '#' },
    { title: 'Services', url: '#' },
    { title: 'Terms of service', url: '#' },
    { title: 'Privacy policy', url: '#' }
  ],
  ourServices: [
    { title: 'Web Design', url: '#' },
    { title: 'Web Development', url: '#' },
    { title: 'Product Management', url: '#' },
    { title: 'Marketing', url: '#' },
    { title: 'Graphic Design', url: '#' }
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
  const socialLinksContainer = document.getElementById('social-links');
  if (socialLinksContainer) {
    socialLinksContainer.innerHTML = ''; // Clear existing links
    socialLinks.forEach(link => {
      const { platform, url } = link;
      const platformClass = platform.toLowerCase();
      const listItem = document.createElement('li');
      const socialLink = document.createElement('a');
      socialLink.href = url;
      socialLink.className = platformClass;
      const icon = document.createElement('i');
      icon.className = `bi bi-${platformClass}`;
      socialLink.appendChild(icon);
      listItem.appendChild(socialLink);
      socialLinksContainer.appendChild(listItem);
    });
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
  setContent('logo', `<img src="${footerData.brandLogo}" alt="${footerData.brandName}" id="logo">`);
  setContent('brandName', footerData.brandName);
  setContent('brandDescription', footerData.brandDescription);
  setContent('companyNumber', `<strong>Phone:</strong> <a href="#">${footerData.companyNumber}</a>`);
  setContent('companyEmail', `<strong>Email:</strong> <a href="#">${footerData.companyEmail}</a>`);

  // Set social links
  setSocialLinks(footerData.socialLinks);

  // Set useful links
  setUsefulLinks(footerData.usefulLinks);

  // Set our services links
  setOurServices(footerData.ourServices);
}

// Call the initFooter function when the page loads
window.onload = initFooter;
