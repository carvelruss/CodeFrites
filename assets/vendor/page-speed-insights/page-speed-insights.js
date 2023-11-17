const apiKey = "YOUR_API_KEY";
const urlToTest = "https://codefrites.com";

const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
  urlToTest
)}&key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract the specific metrics
    const performanceScore =
      data.lighthouseResult.categories.performance.score * 100;
    const accessibilityScore =
      data.lighthouseResult.categories.accessibility.score * 100;
    const bestPracticesScore =
      data.lighthouseResult.categories["best-practices"].score * 100;
    const seoScore = data.lighthouseResult.categories.seo.score * 100;

    // Display the scores on your website
    const scoresContainer = document.getElementById("scores-container");

    scoresContainer.innerHTML = `
                <h2>Performance: ${performanceScore}</h2>
                <h2>Accessibility: ${accessibilityScore}</h2>
                <h2>Best Practices: ${bestPracticesScore}</h2>
                <h2>SEO: ${seoScore}</h2>
            `;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
