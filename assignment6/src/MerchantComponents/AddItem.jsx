import {
  Card,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

function AddItem({ user, updateItems }) {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [price, setItemPrice] = useState("");
  const userID = user[0].id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://192.168.1.239:8080/addItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name: itemName,
        item_desc: itemDesc,
        item_price: price,
        id: userID,
      }),
    }).then((res) =>
      res.json().then((data) => {
        setItemName("");
        setItemDesc("");
        setItemPrice("");

        updateItems();
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <Card className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 px-8">
            <div>
              <div className="mb-2">
                <Label>Item Name</Label>
              </div>
              <TextInput
                className="w-80"
                id="ItemName"
                type="text"
                placeholder="Type Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2">
                <Label>Item Description</Label>
              </div>
              <Textarea
                id="ItemDesc"
                placeholder="Type Description"
                rows={5}
                maxLength={500}
                value={itemDesc}
                onChange={(e) => setItemDesc(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2">
                <Label>Price</Label>
              </div>
              <TextInput
                className="w-20"
                id="Price"
                type="number"
                placeholder="0"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setItemPrice(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default AddItem;
