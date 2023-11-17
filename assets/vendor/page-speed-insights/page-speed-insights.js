const apiKey = "AIzaSyCvzguDuWIwhrbJ2ri7RE-HVHZhf5N9WKs";
const urlToTest = "https://codefrites.com"; // Replace with your URL

const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
  urlToTest
)}&key=${apiKey}`;

// Display loading indicator
const loadingIndicator = document.getElementById("loading-indicator");
loadingIndicator.style.display = "block";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const performanceScore =
      data.lighthouseResult.categories.performance.score * 100;
    const accessibilityScore =
      data.lighthouseResult.categories.accessibility.score * 100;
    const bestPracticesScore =
      data.lighthouseResult.categories["best-practices"].score * 100;
    const seoScore = data.lighthouseResult.categories.seo.score * 100;

    const scoresContainer = document.getElementById("scores-container");

    scoresContainer.innerHTML = `
                    <h2>Performance: ${performanceScore}</h2>
                    <h2>Accessibility: ${accessibilityScore}</h2>
                    <h2>Best Practices: ${bestPracticesScore}</h2>
                    <h2>SEO: ${seoScore}</h2>
                `;

    // Hide loading indicator once data is fetched
    loadingIndicator.style.display = "none";
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Hide loading indicator in case of an error
    loadingIndicator.style.display = "none";
  });
