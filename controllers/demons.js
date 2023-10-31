import Demon from "../models/Demon.js";

export const getdemons = async (req, res) => {
  try {
    const demons = await Demon.find();
    res.json(demons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getdemon = async (req, res) => {
  const { id } = req.params;

  const demon = await Demon.findById(id).populate("members");

  if (demon) {
    return res.json(demon);
  }

  res.status(404).json({ message: "Demon not found" });
};

export const createdemon = async (req, res) => {
  const demon = new Demon(req.body);
  await demon.save();
  res.status(201).json(demon);
};

export const updatedemon = async (req, res) => {
  const { id } = req.params;
  const demon = await Demon.findByIdAndUpdate(id, req.body);
  res.status(201).json(demon);
};

export const deletedemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Demon.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Demon deleted!");
    }

    throw new Error("Demon not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};