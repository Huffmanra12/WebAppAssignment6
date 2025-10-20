//App.jsx is where the main code resides with the exception of putting a router wrapper around the entire application main.jsx and index.html are usuall never touched

import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import MerchantSideBar from "./MerchantComponents/MerchantSideBar";
import WelcomeMessage from "./Global Components/WelcomePage";
import AddItem from "./MerchantComponents/AddItem";
import AllItems from "./Global Components/AllItems";
import Metrics from "./MerchantComponents/MetricsPage";


//The fetches below pull both all items and teh data for the user that logged in. Typically the user data would be pulled at login but that feature isnt built yet.
//the const that exist are a variable and a function to change the variable when called.
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
//this runs the above function when the page initially renders
  useEffect(() => {
    reload();
  }, []);


  return (
    <div className="grid grid-cols-[16rem_1fr] min-h-screen">
      <aside className="justify-self-start self-stretch">
        <MerchantSideBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </aside>
{/*unlike the sidebar the rest of the application changes depending on where you want to be the below are conditionals if you click additem it updates currentPage to AddItem and renders the addItem component*/}
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
//exports app to be used in the application
export default App;
