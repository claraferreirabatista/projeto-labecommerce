import { Request, Response } from "express";
import { db } from "../database/knex";

export const getAllPurchase = async (req: Request, res: Response) => {
  const purchases = await db("purchases");

  res.status(200).send(purchases);
};