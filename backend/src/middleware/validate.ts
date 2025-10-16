import {type ZodSchema } from "zod";

import {type Request, type Response, type NextFunction } from "express";

export const validateBody = (schema: ZodSchema<any>) =>{
(req:Request, res: Response, next:NextFunction) =>{
    const parsed = schema.safeParse(req.body);
    if(!parsed.success) return res.status(400).json({
        errors: parsed.error
        
    })
    req.body = parsed.data
    next();
}
}