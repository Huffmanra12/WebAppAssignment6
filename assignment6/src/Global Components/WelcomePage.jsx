//component that builds the welcome message on the welcome page

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

function WelcomeMessage() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

//UseEffect runs side effects in React Components in this we are fetching the welcome message from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const messageRes = await fetch("http://localhost:8080/welcome");
        const messageData = await messageRes.json();
        setWelcomeMessage(messageData[0].content);
        console.log(messageData);
      } catch (err) {
        console.error("Fetch Error", err);
      }
    };
    fetchData();
  }, []);
//once the welcome message is retrieved a card is created with it in it.
  return (
    <div>
      <Card className="max-w-4xl">
        <p className="whitespace-pre-line leading-relaxed">{welcomeMessage}</p>
      </Card>
    </div>
  );
}

export default WelcomeMessage;
