import React, { useState, useEffect } from 'react';

const PostScanProcess = ({ scanResult }) => {
  const [scanOutput, setScanOutput] = useState('');
  const [scanSuggestions, setScanSuggestions] = useState([]);
  const [isScanCompleted, setIsScanCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For simulating loading progress

  useEffect(() => {
    if (scanResult) {
      setScanOutput(scanResult.output || 'No output available');
      setScanSuggestions(scanResult.suggestions || []);
      setIsScanCompleted(true);
      setIsLoading(false); // Finished loading when scanResult arrives
    }

    // Optional: Simulating the scanning process
    setTimeout(() => {
      setIsScanCompleted(true);
      setIsLoading(false);
    }, 3000); // Simulating scan time for 3 seconds

  }, [scanResult]);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Post Scan Results</h1>

      {/* Display loading message if scan is still in progress */}
      {isLoading ? (
        <div>
          <p>Scan is in progress...</p>
          {/* Optional: Add a loading spinner */}
          <div className="spinner">🔄</div>
        </div>
      ) : (
        <div>
          <h3>Scan Completed</h3>
          <div>
            <h4>Scan Output:</h4>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
              {scanOutput}
            </pre>
          </div>
          {/* Optionally, display scan suggestions */}
          {scanSuggestions.length > 0 && (
            <div>
              <h4>Suggestions:</h4>
              <ul>
                {scanSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Button to start a new scan */}
          <div>
            <button onClick={() => window.location.reload()}>Start New Scan</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostScanProcess;
