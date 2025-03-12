import { useState, useEffect } from "react";

const ServerStatus = () => {
    const [status, setStatus] = useState("Checking...");
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const checkServer = async () => {
            try {
                const response = await fetch("https://porthunter-back.onrender.com/");
                if (response.ok) {
                    setStatus("Live");
                    setIsLive(true);
                } else {
                    setStatus("Offline");
                    setIsLive(false);
                }
            } catch (error) {
                setStatus("Offline");
                setIsLive(false);
                console.error("Fetch error:", error);

            }
        };

        checkServer();
        const interval = setInterval(checkServer, 4000); // Check every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="status">
                 <p>● Server Status / <div className={isLive ? "flicker-live" : "flicker-offline"}>{status}</div></p>
            

            {/* Add CSS animation */}
            <style>
                {`
                    @keyframes flicker-live {
                        0% { color: limegreen; }
                        50% { color: lightgreen; }
                        100% { color: limegreen; }
                    }
                    
                    @keyframes flicker-offline {
                        0% { color: red; }
                        50% { color: darkred; }
                        100% { color: red; }
                    }

                    .flicker-live {
                        animation: flicker-live 1s infinite alternate;
                    }

                    .flicker-offline {
                        animation: flicker-offline 1s infinite alternate;
                    }
                `}
            </style>
        </div>
    );
};

export default ServerStatus;
