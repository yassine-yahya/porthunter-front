import React from 'react';
import '../App.css';

const DocsPage = () => {
    return (
        <div className="docs-container">
            <h1 id='Docs'>Documentation</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    Welcome to the documentation. This application allows users to scan network
                    information such as open/closed ports and security protocols. It's built using React and
                    Node.js, and Python libraries, and it requires admin privileges to run the scan.
                </p>
            </section>

            <section>
                <h2>How to Use</h2>
                <h3>Step 1: Enter the Target IP/Domain</h3>
                <p>
                    In the input field, enter the IP address, domain name (e.g., example.com), or use "localhost"
                    for local testing.
                </p>

                <h3>Step 2: Start Scan</h3>
                <p>
                    Click the "Start Scan" button to begin the scan. The application will analyze the target and
                    return results on open and closed ports, SSL and FTP health, as well as security recommendations.
                </p>

                <h3>Step 3: Review the Results</h3>
                <p>
                    After the scan completes, the results will be displayed. You'll see information such as
                    open/closed ports, protocols, and security suggestions.
                </p>
            </section>

            <section>
                <h2>API Reference</h2>
                <h3>POST /scan</h3>
                <p>This endpoint is used to perform a scan on a target (IP/Domain).</p>
                <pre>
                    <code>
                        {`POST /scan
Request body:
{
  "targetIP": "string"   // IP address or domain to scan
}

Response:
{
  "result": [
    {
      "port": "number",      // Port number
      "state": "open/closed",// Port state
      "friendly_name": "string", // Protocol name
      "suggestion": "string" // Security suggestion (if any)
    }
  ]
}`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Security Considerations</h2>
                <p>
                    Scanning requires admin privileges, and it is recommended to run the scan with elevated
                    permissions to ensure accurate results. Additionally, the scan may be blocked or limited by
                    firewalls or other network security measures.
                    Note: Other threats like SQL Injection or XSS may exist over this scan.
                    Use only on devices you own or have explicit permission to scan. Unauthorized scanning is illegal. 
                </p>
            </section>

          
        </div>
    );
};

export default DocsPage;
