import db from "../db/connection.js";
import Demon from "../models/Demon.js";
import Slayer from "../models/Slayer.js";
import demons from "../db/demons.json" assert { type: "json" };
import slayers from "../db/slayers.json" assert { type: "json" };


const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Slayer.create (slayers);
  await Demon.create(demons);

  console.log(" Slayers created!");

  // Close DB Connection
  await db.close();
};

insertData();