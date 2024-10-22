// src/controller/vinyl.controller.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Vinyl } from "../entity/Vinyl";

// Get all vinyls
export const getVinyls = async (req: Request, res: Response) => {
  const vinyls = await AppDataSource.getRepository(Vinyl).find();
  res.json(vinyls);
};

// Create a new vinyl
export const createVinyl = async (req: Request, res: Response) => {
  const vinyl = AppDataSource.getRepository(Vinyl).create(req.body);
  const result = await AppDataSource.getRepository(Vinyl).save(vinyl);
  res.json(result);
};

// Update a vinyl by id
export const updateVinyl = async (req: Request, res: Response) => {
  const vinyl = await AppDataSource.getRepository(Vinyl).findOneBy({
    id: parseInt(req.params.id),
  });
  if (vinyl) {
    AppDataSource.getRepository(Vinyl).merge(vinyl, req.body);
    const result = await AppDataSource.getRepository(Vinyl).save(vinyl);
    res.json(result);
  } else {
    res.json({ message: "Vinyl not found" });
  }
};

// Delete a vinyl by id
export const deleteVinyl = async (req: Request, res: Response) => {
  const result = await AppDataSource.getRepository(Vinyl).delete(req.params.id);
  res.json(result);
};
