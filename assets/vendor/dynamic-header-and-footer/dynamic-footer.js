/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

document.addEventListener("DOMContentLoaded", function () {
  // Footer data object with dynamic content
  const footerData = {
    brandLogo: "/assets/img/official-logo.svg",
    brandName: "CodeFrites",
    brandDescription:
      "At CodeFrites, we're not just your ordinary website development company; we bring a unique and personal touch to every project we undertake.",
    companyNumber: "+63 909 135 2732",
    companyEmail: "friesquad@codefrites.com",
    storysetAttribute: "https://storyset.com/online",
    socialNetworksDescription:
      "To get more updated on latest promotion and more, follow our social media accounts.",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      // Add or remove social links here as needed
    },
    usefulLinks: [
      { text: "Home", href: "/index.html" },
      { text: "About us", href: "/pages/about.html" },
      { text: "Services", href: "/pages/services.html" },
      { text: "Portfolio", href: "/pages/portfolio.html" },
      { text: "Articles", href: "/pages/articles.html" },
      { text: "Terms of service", href: "/pages/terms-of-service.html" },
      { text: "Privacy policy", href: "/pages/privacy-policy.html" },
      // Add or links here as needed
    ],
    ourServices: [
      {
        text: "White-Label Web Development",
        href: "/pages/services/white-label-web-development.html",
      },
      {
        text: "CMS Integration",
        href: "/pages/services/cms-integration.html",
      },
      {
        text: "E-commerce Development",
        href: "/pages/services/ecommerce-development.html",
      },
      {
        text: "Front-End Development",
        href: "/pages/services/frontend-development.html",
      },
      {
        text: "Back-End Development",
        href: "/pages/services/backend-development.html",
      },
      {
        text: "Affiliates Services",
        href: "/pages/services/affiliates-services.html",
      },
      // Add or remove links here as needed
    ],
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
      element.setAttribute("href", url);
    }
  }

  // Function to set social network links dynamically
  function setSocialLinks(socialLinks) {
    const socialLinksContainer = document.getElementById("footer-social-links");
    if (socialLinksContainer) {
      let socialLinksHtml = "";
      for (const platform in socialLinks) {
        socialLinksHtml += `<a href="${socialLinks[platform]}" class="${platform}"><i class="bx bxl-${platform}"></i></a>`;
      }
      socialLinksContainer.innerHTML = socialLinksHtml;
    }
  }

  // Function to set useful links dynamically
  function setUsefulLinks(usefulLinks) {
    const linksContainer = document.getElementById("useful-links");
    if (linksContainer) {
      let linksHtml = "";
      usefulLinks.forEach((link) => {
        linksHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${link.href}">${link.text}</a></li>`;
      });
      linksContainer.innerHTML = linksHtml;
    }
  }

  // Function to set our services links dynamically
  function setOurServices(ourServices) {
    const servicesContainer = document.getElementById("our-services");
    if (servicesContainer) {
      let servicesHtml = "";
      ourServices.forEach((service) => {
        servicesHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${service.href}">${service.text}</a></li>`;
      });
      servicesContainer.innerHTML = servicesHtml;
    }
  }

  // Function to initialize dynamic content
  function initFooter() {
    // Set footer content
    setContent(
      "footer-logo-container",
      `<img src="${footerData.brandLogo}" alt="${footerData.brandName}">`
    );
    setContent("footer-brandName", footerData.brandName);
    setContent("brandDescription", footerData.brandDescription);
    setContent(
      "socialNetworksDescription",
      footerData.socialNetworksDescription
    );
    setContent(
      "companyNumber",
      `<strong>Phone:</strong> <a href="tel:${footerData.companyNumber}">${footerData.companyNumber}</a>`
    );
    setContent(
      "companyEmail",
      `<strong>Email:</strong> <a href="mailto:${footerData.companyEmail}">${footerData.companyEmail}</a>`
    );
    setContent(
      "storysetAttribute",
      `<p>Storyset: <a href="${footerData.storysetAttribute}">${footerData.storysetAttribute}</a></p>`
    );
    setContent("creditbrandName", `<strong>${footerData.brandName}</strong>`);

    // Set social links
    setSocialLinks(footerData.socialLinks);

    // Set useful links
    setUsefulLinks(footerData.usefulLinks);

    // Set our services links
    setOurServices(footerData.ourServices);
  }

  // Call the initFooter function when the page loads
  initFooter();
});
