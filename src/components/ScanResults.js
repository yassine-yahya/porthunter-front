import React from "react";
import "../App.css";

function ScanResults({ results }) {
  // If no results or undefined results


  return (
    <div>
      {results.length > 0 && (
        <div>
          <h3>Scan Results</h3>
          <ul className="card-grid">
            {results.map((result, index) => (
              <li key={index} className="card">
                <p><strong>Port:</strong> {result.port}</p>
                <p className="state"><strong>State:</strong> {result.state}</p>
                <p><strong>Name:</strong> {result.name}</p>
                <p className="suggestion"><strong>Suggestion:</strong> {result.suggestion}</p>
              </li>
            ))}

           
          </ul>
        </div>
      )}
    </div>
  )
}


export default ScanResults;
