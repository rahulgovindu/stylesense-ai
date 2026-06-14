import { ScrollViewStyleReset } from 'expo-router/html';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* 
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native. 
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}

// On web we present the app inside a centered phone frame so the browser demo
// reads as a real mobile app instead of a stretched full-width page.
// On narrow (real phone) viewports the frame collapses to full-bleed.
const responsiveBackground = `
:root { color-scheme: light; }
* { box-sizing: border-box; }
html, body {
  height: 100%;
  margin: 0;
  background: radial-gradient(circle at 50% 0%, #2c2c4a 0%, #16161f 70%);
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
#root {
  width: 390px;
  max-width: 100%;
  height: 90vh;
  max-height: 844px;
  background-color: #F8F7F4;
  border-radius: 44px;
  overflow: hidden;
  box-shadow: 0 0 0 11px #0d0d14, 0 0 0 13px #2a2a3a, 0 40px 90px rgba(0,0,0,0.55);
  position: relative;
  display: flex;
  flex-direction: column;
}
/* Real phones: drop the frame, go full screen */
@media (max-width: 440px) {
  body { padding: 0; }
  #root {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    box-shadow: none;
  }
}`;
