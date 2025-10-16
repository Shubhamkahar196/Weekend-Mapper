import { type Request, type Response} from "express";
import client from "../config/db.js";

export const getPlaces = async (req: Request,res : Response)=>{
    const {category, time } = req.body;
    try {
        const places = await client.place.findMany({
            where: {
                category: category ? String(category) : undefined,
                bestTime: time ? String(time) : undefined,
            },
        });
        res.json(places);
    } catch (error) {
        res.status(500).json({
            error: 'Server error'
        })
    }
}