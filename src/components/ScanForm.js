import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ScanForm = () => {
    const [targetIP, setTargetIP] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const apiUrl = process.env.NEXT_PUBLIC_URL_API;


    const validateInput = (input) => {
        const regex = /^(localhost|(\d{1,3}\.){3}\d{1,3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/;
        return regex.test(input);
    };

    const handleScan = async (e) => {
        e.preventDefault();
    
        // Validate input before starting the scan
        if (!validateInput(targetIP)) {
            alert('Please enter a valid IP address, localhost, or domain name.');
            return; // End the function early if the input is invalid
        }
    
        setLoading(true);
        setResults([]); // Clear previous results
    
        try {
            // Send request to your backend for scanning the IP/Domain
            const response = await axios.post(`${apiUrl}/scan`, "https://porthunter-back-1.onrender.com", { targetIP }, ); // Set a timeout (e.g., 10 seconds)
    
            console.log('API Response:', response); // Debugging
    
            if (response.data && response.data.result) {
                setResults(response.data.result); // Store results
            }
        } catch (error) {
            console.error('Error scanning target:', error);
    
            // Handle different types of errors
            if (error.response) {
                // The server responded with a status code other than 2xx
                if (error.response.status === 404) {
                    alert('The server or domain could not be found. Please check the domain/IP address.');
                } else if (error.response.status === 500) {
                    alert('There was an issue with the server. Please try again later.');
                } else {
                    alert(`Unexpected error: ${error.response.status}`);
                }
            } else if (error.request) {
                // The request was made but no response was received (network error)
                alert('Network error. The IP or domain may not exist or is unreachable. Please check the connection or try again later.');
            } else if (error.code === 'ECONNABORTED') {
                // Timeout error
                alert('The request timed out. The IP or domain may not be reachable. Please try again later.');
            } else {
                // Other errors (e.g., setup errors, or unknown errors)
                alert('An unknown error occurred. Please try again.');
            }
    
            setResults([]); // Reset on error
        } finally {
            setLoading(false);
        }
    };

  

    // Check for FTP (port 21) and SSL (port 443)
    const hasFTP = results.some(result => result.port === 21);
    const hasSSL = results.some(result => result.port === 443);

    

    return (
        <div className="scan-form-container" id="form">
            <form onSubmit={handleScan}>
                <div className="main-form">
                    <div className="form-content">
                        <label>
                            Try Localhost, IP Address or Website
                            <input
                                type="text"
                                placeholder="Localhost"

                                value={targetIP}
                                onChange={(e) => setTargetIP(e.target.value)} // Update state
                            />
                        </label>
                        <div className="privacy">
                <p>🔒Your <strong>privacy</strong> is important to us. We do not collect, store, or share any personal data.</p>
            </div>


                        <p className="warning">
                            ⚠️ Scanning requires admin privileges. If prompted, please grant permission. and do not refresh the page before the scan ends.
                        </p>
                    </div>
                </div>
                <div className="">
                <button type="submit" disabled={loading} className={loading ? 'loading' : ''}>
    {loading ? (
        <span className="typing-effect">⚡Scanning take time..do no refresh</span>
    ) : (
        'Start Scan'
    )}
</button>
                <p className="target">Target  {targetIP ? targetIP : "?"}</p>


</div>

            </form>

            

            

            {results.length > 0 && (
                <div>
                    <ul className="card-grid">
                        {results.map((result, index) => (
                            <li key={index} className="card">
                                <div className="header-card">
                                    <p className="port"><strong>Port</strong>&nbsp; { result.port}</p>
                                    <p className="port-state"
                                        style={{
                                            color: result.state === "open" ? "red" : "green", // Change text color based on the state
                                        }}
                                    >
                                        <strong> {result.state}</strong>
                                    </p>
                                </div>
                              <div className="middle">
                                    <p className="protocol"><strong>Protocol:</strong> {result.friendly_name}</p>
                                    </div>
                                    <div className="footer-card">
                                    <p className="suggestion"><strong>Recommended:</strong> {result.suggestion}</p>
                                </div>
                            </li>
                        ))}

                        {/* Show FTP Security card if port 21 is NOT detected */}
                        {!hasFTP && (
                            <div className="card-secure">
                                <h4>FTP Security</h4>
                                <p>Port 21 (FTP) was not detected in the scan, indicating it is secure or not exposed.</p>
                            </div>
                        )}

                        {/* Show SSL Security card if port 443 is NOT detected */}
                        {!hasSSL && (
                            <div className="card-secure">
                                <h4>SSL Security</h4>
                                <p>Port 443 (SSL) was not detected in the scan, indicating it is secure or not exposed.</p>
                            </div>
                        )}
                    </ul>
                    <p className="note-after-results">Note: Web threats like SQL Injection or XSS not included in this scan.</p>
            
                <h3>- End of Scan -</h3>
                </div>
                
            )}
        </div>
    );
};

export default ScanForm;
