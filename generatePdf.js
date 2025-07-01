import { launch } from 'puppeteer';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  // 1. Set the viewport to match your webpage's dimensions
  // This ensures the page is rendered at your desired resolution before PDF conversion
  await page.setViewport({
    width: 1240, // Your webpage width
    height: 4108, // Your webpage height
    deviceScaleFactor: 1, // Keep at 1 unless you explicitly want to scale up/down
  });

  // IMPORTANT: Use the exact URL where your Vite build is served
  // from 'npm run preview' (e.g., http://localhost:4173/)
  const websiteUrl = 'http://localhost:4173/arul-ats-resume'; // <<-- REPLACE WITH YOUR ACTUAL URL

  await page.goto(websiteUrl, {
    waitUntil: 'networkidle0', // Wait until network activity is minimal (all content loaded)
    timeout: 60000 // Increase timeout to 60 seconds for larger pages
  });

  // 2. Generate the PDF with custom dimensions
  await page.pdf({
    path: 'my-resume.pdf',       // Output file name
    width: '1240px',             // Set PDF width exactly to your webpage width
    height: '4108px',            // Set PDF height exactly to your webpage height
    printBackground: true,       // Crucial for preserving background colors and images
    pageRanges: '1',             // Ensures only the first (and only) page is printed
    margin: {                    // Set all margins to zero to avoid extra whitespace
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    },
    // If you experience scaling issues, you might need to play with 'scale' here.
    // For example, scale: 0.8 might shrink everything by 20%.
    // Usually, setting width/height and viewport correctly means 'scale' can be 1.
    scale: 1,
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();