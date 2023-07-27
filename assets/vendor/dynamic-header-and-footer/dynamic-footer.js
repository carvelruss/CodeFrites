  const footerConfig = {
    brandLogoSrc: 'assets/img/codefrites-temporary-logo.svg',
    brandName: 'CodeFrites',
    brandDescription: "At CodeFrites, we're not just your ordinary website development company; we bring a unique and personal touch to every project we undertake.",

    // Contact Info
    companyAddress: "We don't have a physical office yet.",
    companyNumber: '+63 909 135 2732',
    companyEmail: 'friesquad@codefrites.com',

    socialLinks: [
      { icon: 'bi bi-facebook', url: '#' },
      { icon: 'bi bi-instagram bx bxl-instagram', url: '#' },
    ],
    usefulLinks: [
      { text: 'Home', url: '#' },
      { text: 'About us', url: '#' },
      { text: 'Services', url: '#' },
      { text: 'Terms of service', url: '#' },
      { text: 'Privacy policy', url: '#' },
    ],
    ourServices: [
      { text: 'Web Design', url: '#' },
      { text: 'Web Development', url: '#' },
      { text: 'Product Management', url: '#' },
      { text: 'Marketing', url: '#' },
      { text: 'Graphic Design', url: '#' },
    ],
  };

  // Function to update the footer brand name and logo
  function updateFooterBrand() {
    const brandNameElement = document.getElementById('brandName');
    const brandLogoElement = document.getElementById('brandLogo');
    const brandLinkElement = document.getElementById('brandLink');

    brandNameElement.textContent = footerConfig.brandName;
    brandLogoElement.src = footerConfig.brandLogoSrc;
    brandLinkElement.href = 'index.html'; // Update the 'href' attribute with your desired URL
  }

  // Function to update the footer brand description
  function updateFooterBrandDescription() {
    const footerBrandDescriptionElement = document.getElementById('brandDescription');
    footerBrandDescriptionElement.textContent = footerConfig.brandDescription;
  }

  // Function to populate footer links dynamically
  function populateFooterLinks(linksArray, containerId) {
    const container = document.getElementById(containerId);
    let linksHTML = '';

    linksArray.forEach(link => {
      linksHTML += `<li><i class="bi bi-chevron-right"></i> <a href="${link.url}">${link.text}</a></li>`;
    });

    container.querySelector('ul').innerHTML = linksHTML;
  }

  // Function to populate social links
  function populateSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    let socialLinksHTML = '';

    footerConfig.socialLinks.forEach(link => {
      socialLinksHTML += `<a href="${link.url}" class="${link.icon}"></a>`;
    });

    socialLinksContainer.innerHTML = socialLinksHTML;
  }

  // Function to get the current year
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Function to update the current year in the footer
  function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = getCurrentYear();
  }

  // Function to update the company address, number, and email
  function updateCompanyInfo() {
    const companyAddressElement = document.getElementById('companyAddress');
    const companyNumberElement = document.getElementById('companyNumber');
    const companyEmailElement = document.getElementById('companyEmail');

    companyAddressElement.textContent = footerConfig.companyAddress;
    companyNumberElement.innerHTML = `<strong>Phone:</strong> <a href="tel:${footerConfig.companyNumber}">${footerConfig.companyNumber}</a>`;
    companyEmailElement.innerHTML = `<strong>Email:</strong> <a href="mailto:${footerConfig.companyEmail}">${footerConfig.companyEmail}</a>`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateFooterBrand();
    updateFooterBrandDescription();
    populateFooterLinks(footerConfig.usefulLinks, 'usefulLinks');
    populateFooterLinks(footerConfig.ourServices, 'ourServices');
    populateSocialLinks();
    updateCurrentYear();
    updateCompanyInfo();
  });
