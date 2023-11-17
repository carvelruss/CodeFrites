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
    try {
      // Check if 'lighthouseResult' and 'categories' exist in the response
      if (data && data.lighthouseResult && data.lighthouseResult.categories) {
        const lighthouseData = data.lighthouseResult.categories;
        const performanceScore = lighthouseData.performance.score * 100 || 0;
        const accessibilityScore =
          lighthouseData.accessibility.score * 100 || 0;
        const bestPracticesScore =
          lighthouseData["best-practices"].score * 100 || 0;
        const seoScore = lighthouseData.seo.score * 100 || 0;

        const scoresContainer = document.getElementById("scores-container");

        scoresContainer.innerHTML = `
                            <h2>Performance: ${performanceScore}</h2>
                            <h2>Accessibility: ${accessibilityScore}</h2>
                            <h2>Best Practices: ${bestPracticesScore}</h2>
                            <h2>SEO: ${seoScore}</h2>
                        `;
      } else {
        throw new Error("Categories not found in API response");
      }
    } catch (error) {
      console.error("Error processing data:", error);
      // Hide loading indicator in case of an error
      loadingIndicator.style.display = "none";
    }

    // Hide loading indicator once data is fetched (even in case of an error)
    loadingIndicator.style.display = "none";
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Hide loading indicator in case of an error
    loadingIndicator.style.display = "none";
  });
