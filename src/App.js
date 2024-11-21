import React, { useState } from 'react';
import ScreenshotButton from './ScreenshotButton';

const App = () => {
  const [screenshot, setScreenshot] = useState(null);

  const captureScreenshot = () => {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (image) => {
      setScreenshot(image);
    });
  };

  const downloadScreenshot = () => {
    const link = document.createElement('a');
    link.href = screenshot;
    link.download = 'screenshot.png';
    link.click();
  };

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <h2>Screenshot Tool</h2>
      <ScreenshotButton onCapture={captureScreenshot} />
      {screenshot && (
        <div>
          <img
            src={screenshot}
            alt="Screenshot Preview"
            style={{ width: '100%', margin: '10px 0' }}
          />
          <button onClick={downloadScreenshot} style={{ width: '100%', padding: '8px' }}>
            Download Screenshot
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
