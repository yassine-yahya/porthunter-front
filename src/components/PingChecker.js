import { useState } from "react";

function PingChecker() {
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState("");

  const checkPing = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target_ip: ip }),
      });
      const data = await response.json();
      
      if (data.alive) {
        setStatus(`${ip} is reachable ✅`);
      } else {
        setStatus(`${ip} is NOT reachable ❌`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to check ping.");
    }
  };

  return (
    <div>
      <h2>Ping a Target IP</h2>
      <input 
        type="text" 
        value={ip} 
        onChange={(e) => setIp(e.target.value)} 
        placeholder="Enter IP Address" 
      />
      <button onClick={checkPing}>Check Ping</button>
      <p>{status}</p>
    </div>
  );
}

export default PingChecker;
