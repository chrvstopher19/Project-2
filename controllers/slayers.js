import Slayer from "../models/Slayer.js";

export const getSlayers = async (req, res) => {
  try {
    const slayers = await Slayer.find();
    res.json(slayers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const slayer = await Slayer.findById(id);

    if (slayer) {
      return res.json(slayer);
    }

    res.status(404).json({ message: "slayer not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createslayer = async (req, res) => {
  try {
    const slayer = new Slayer(req.body);
    await slayer.save();
    res.status(201).json(slayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateslayer = async (req, res) => {
  try {
    const { id } = req.params;
    const slayer = await Slayer.findByIdAndUpdate(id, req.body);

    res.status(201).json(slayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteslayer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Slayer.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("slayer deleted!");
    }

    throw new Error("slayer not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};