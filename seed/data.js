import db from "../db/connection.js";
import House from "../models/Demon.js";
import Slayer from "../models Slayer.js";
import houses from "./demons.json" assert { type: "json" };
import Slayers from "./slayers.json" assert { type: "json" };
import chalk from "chalk";


const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Slayer.create (slayers);
  await Demon.create(demons);

  console.log(chalk.magenta(" Slayers created!"));

  // Close DB Connection
  await db.close();
};

insertData();