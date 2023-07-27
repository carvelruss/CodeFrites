const navLinks = [
  { text: 'Home', url: '#hero' },
  { text: 'Services', url: '#services' },
  { text: 'About', url: '#about' },
  { text: 'Portfolio', url: '#portfolio' },
  { text: 'Blog', url: 'blog.html' },
  { text: 'Contact', url: '#contact' },
  { text: 'Get Started', url: '#about' },
];

const brandName = 'CodeFrites';
const newLogoSrc = 'assets/img/codefrites-temporary-logo.svg';

// Function to recursively populate the navigation links (including nested sub-menus)
function populateNavLinks(linksArray) {
  let linksHTML = '';

  linksArray.forEach(link => {
    if (link.dropdown) {
      linksHTML += `
        <li class="dropdown">
          <a href="javascript:void(0);" class="nav-link scrollto"><span>${link.text}</span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            ${populateNavLinks(link.subLinks)}
          </ul>
        </li>
      `;
    } else {
      linksHTML += `<li><a href="${link.url}">${link.text}</a></li>`;
    }
  });

  return linksHTML;
}

// Function to update the brand name
function updateBrandName() {
  const brandNameElement = document.getElementById('brandName');
  brandNameElement.textContent = brandName;
}

// Function to change the logo dynamically
function updateLogo() {
  const logoImg = document.getElementById('logoImg');
  logoImg.src = newLogoSrc;
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinksContainer = document.getElementById('navLinks');
  navLinksContainer.innerHTML = populateNavLinks(navLinks);
  updateBrandName();
  updateLogo();

  // Toggle mobile navigation on menu icon click
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navbar = document.getElementById('navbar');
  mobileNavToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });

  // Toggle dropdown sub-menu on click for mobile mode
  const dropdownLinks = document.querySelectorAll('.dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      if (navbar.classList.contains('show')) {
        event.preventDefault();
        const parentListItem = this.parentElement;
        parentListItem.classList.toggle('active');
      }
    });
  });
});
