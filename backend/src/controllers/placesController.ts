import {type  Request, type Response } from "express";
import client from "../config/db.js";

export const getPlaces = async (req: Request, res: Response) => {
  const { category, time } = req.query;

  try {
    const filters: any = {};

    if (category) filters.category = String(category);
    if (time) filters.bestTime = String(time);

    const places = await client.place.findMany({
      where: filters,
    });

    res.json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
