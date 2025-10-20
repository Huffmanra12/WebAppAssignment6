//This file creates the all items component

import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

//The function AllItems receives a prop from the parent component called items
function AllItems({ items = [] }) {
  const navigate = useNavigate();

  //If statment checks to ensure that items contains data by ensuring it has a lenght thats not less than 1.
  if (items.length < 1) {
    return (
      <Card>
        <p className="text-center">{items.length}</p>
      </Card>
    );
  }

  //If the length is 1 or greater then the array is parsed and a card is built for each object in the array.
  return (
    <div
      className={`flex flex-wrap justify-center${
        items.length < 1 ? "md:grid md:grid-cols-4 sm: grid-cols-1" : ""
      } gap-10 `}
    >
      {items.map((e, i) => {
        let shortDesc = "";
        if (e.item_description.length > 30) {
          shortDesc = `${e.item_description.substring(0, 30)}...`;
        } else {
          shortDesc = e.item_description;
        }

        return (
          <Card key={i} className="max-w-md flex flex-col items-center">
            <p>{e.item_name}</p>
            <p className="max-w-md break-all">{shortDesc}</p>
            <p>Price: ${e.item_price}</p>
            <Button>Select Item</Button>
          </Card>
        );
      })}
    </div>
  );
}
//exports the function to be inported elsewhere in the application.
export default AllItems;
