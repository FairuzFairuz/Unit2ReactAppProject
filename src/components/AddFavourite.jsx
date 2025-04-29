import React, { useState } from "react";
import Navbar from "./NavBar";

const AddFavourite = () => {
  const [yourName, setYourName] = useState("");
  const [yourFavouritePlayer, setYourFavouritePlayer] = useState("");
  const [yourGOAT, setYourGOAT] = useState("");

  const addFavourite = async (name, favouritePlayer, goat) => {
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
                "Your Name": name,
                "Your Favourite Player": favouritePlayer,
                "Your GOAT": goat,
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
    addFavourite(yourName, yourFavouritePlayer, yourGOAT);
    setYourName("");
    setYourFavouritePlayer("");
    setYourGOAT("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          style={{
            width: "400px", // Sets the width
            height: "40px", // Sets the height
            padding: "10px", // Adds inner spacing
            fontSize: "16px", // Adjusts font size
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your favourite player"
          value={yourFavouritePlayer}
          onChange={(e) => setYourFavouritePlayer(e.target.value)}
          style={{
            width: "400px", // Sets the width
            height: "40px", // Sets the height
            padding: "10px", // Adds inner spacing
            fontSize: "16px", // Adjusts font size
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Enter your GOAT"
          value={yourGOAT}
          onChange={(e) => setYourGOAT(e.target.value)}
          style={{
            width: "400px", // Sets the width
            height: "40px", // Sets the height
            padding: "10px", // Adds inner spacing
            fontSize: "16px", // Adjusts font size
          }}
        />
      </div>
      <button onClick={handleSubmit}>Share</button>
      <Navbar />
    </div>
  );
};

export default AddFavourite;
