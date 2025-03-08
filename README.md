Documentation
Introduction
Welcome to the documentation. This application allows users to scan network information such as open/closed ports and security protocols. It's built using React and Node.js, and Python libraries, and it requires admin privileges to run the scan.

How to Use
Step 1: Enter the Target IP/Domain
In the input field, enter the IP address, domain name (e.g., example.com), or use "localhost" for local testing.

Step 2: Start Scan
Click the "Start Scan" button to begin the scan. The application will analyze the target and return results on open and closed ports, SSL and FTP health, as well as security recommendations.

Step 3: Review the Results
After the scan completes, the results will be displayed. You'll see information such as open/closed ports, protocols, and security suggestions.

API Reference
POST /scan
This endpoint is used to perform a scan on a target (IP/Domain).

POST /scan
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
}