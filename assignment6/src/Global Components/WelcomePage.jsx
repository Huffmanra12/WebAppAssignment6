import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

function WelcomeMessage() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messageRes = await fetch("http://192.168.1.239:8080/welcome");
        const messageData = await messageRes.json();
        setWelcomeMessage(messageData[0].content);
        console.log(messageData);
      } catch (err) {
        console.error("Fetch Error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card className="max-w-4xl">
        <p className="whitespace-pre-line leading-relaxed">{welcomeMessage}</p>
      </Card>
    </div>
  );
}

export default WelcomeMessage;
