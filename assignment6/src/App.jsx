import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import MerchantSideBar from "./MerchantComponents/MerchantSideBar";
import WelcomeMessage from "./Global Components/WelcomePage";
import AddItem from "./MerchantComponents/AddItem";
import AllItems from "./Global Components/AllItems";
import Metrics from "./MerchantComponents/MetricsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Welcome");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);

  const reload = async () => {
    try {
      const itemsRes = await fetch("http://192.168.1.239:8080/items");
      const itemsData = await itemsRes.json();
      setItems(itemsData);

      //ID is hardcoded till sign-in fucntion is built.
      const userRes = await fetch("http://192.168.1.239:8080/users/2");
      const userData = await userRes.json();
      setUser(userData);
    } catch (err) {
      console.error("Fetch Error", err);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  {
    /*useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRes = await fetch("http://192.168.1.239:8080/items");
        const itemsData = await itemsRes.json();
        setItems(itemsData);

        //User ID hardcoded for now till sign in option is built. Sign in will fetch user info to include ID.
        const userRes = await fetch("http://192.168.1.239:8080/users/2");
        const userData = await userRes.json();
        setUser(userData);
      } catch (err) {
        console.error("Fetch Error", err);
      }
    };
    fetchData();
  }, []);*/
  }

  return (
    <div className="grid grid-cols-[16rem_1fr] min-h-screen">
      <aside className="justify-self-start self-stretch">
        <MerchantSideBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </aside>

      <main className="p-6 w-full">
        {currentPage === "Welcome" && <WelcomeMessage items={items} />}
        {currentPage === "AddItem" && (
          <AddItem user={user} updateItems={reload} />
        )}
        {currentPage === "AllItems" && <AllItems items={items} />}
        {currentPage === "Metrics" && <Metrics />}
      </main>
    </div>
  );
}

export default App;
