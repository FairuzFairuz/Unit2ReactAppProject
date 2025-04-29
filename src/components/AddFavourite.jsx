import React, { useState } from "react";

const AddFavourite = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const addFavourite = async (type, name, details) => {
    const url = `https://api.airtable.com/v0/appRoscyG9Xu1nyFT/Favourites`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer patwezA0qulTsaQDt.9cd387f718bf4407daa5b030f7eea02db163ae5499f7f7fc263fc7c146425e16`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Type: type,
                Name: name,
                Details: details,
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Favorite added:", data);
      alert("Favorite added successfully!");
    } catch (error) {
      console.error("Error adding favorite:", error);
      alert("Failed to add favorite. Please try again.");
    }
  };

  const handleSubmit = () => {
    addFavourite(type, name, details);
    setType("");
    setName("");
    setDetails("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Player, Team or League"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Reason"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
export default AddFavourite;
