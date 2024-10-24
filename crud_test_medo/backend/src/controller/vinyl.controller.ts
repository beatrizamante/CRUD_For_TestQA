import { AppDataSource } from './../connection';
import { Response } from "express";
import { CustomRequest } from "./../interface/CustomRequest";
import { Vinyls } from "../entity/Vinyls";

export default class VinylController {

  static listAllVinyls = async (
    req: CustomRequest<{ band: string; title: string; year: number }>,
    res: Response
  ) => {
    try {
      const vinyls = await AppDataSource.getRepository(Vinyls).find();
      res.status(200).json(vinyls);
    } catch (err) {
      console.error("Error loading vinyl", err);
      res.status(500).json({
        message: "There was a problem while loading the vinyls in our case.",
      });
    }
  };

  static vinylById = async (
    req: CustomRequest<{ band: string; title: string; year: number }>,
    res: Response
  ) => {
    try {
      const vinyl = await AppDataSource.getRepository(Vinyls).findOne({
        where: { vinyl_id: parseInt(req.params.id) }
      })

      if(vinyl) {
        res.status(200).json(vinyl);
      } else {
        res.status(404).json({ message: 'Vinyl not found' });
      }

     } catch(err) {
      console.error("And error occured when finding the id, ", err)
     }
  }

  static createNewVinyl = async (
    req: CustomRequest<{ band: string; title: string; year: number }>,
    res: Response
  ) => {
    const { band, title, year } = req.body;
    const vinylRepository = AppDataSource.getRepository(Vinyls);
  
    if (!band || !title) {
      return res
        .status(400)
        .json({ message: "Band name and title are required." });
    }
  
    try {
      let existingVinyl = await vinylRepository.findOne({
        where: { band: band, title: title },
      });
  
      if (existingVinyl) {
        existingVinyl.year = year;
        const result = await vinylRepository.save(existingVinyl);
        return res.status(200).json(result); 
      }
  
      const newVinyl = vinylRepository.create({
        title: title,
        band: band,
        year: year,
      });
  
      const result = await vinylRepository.save(newVinyl);
      res.status(201).json(result); 
    } catch (err) {
      console.error("Error creating vinyl", err);
      res.status(400).json({ message: "Error creating vinyl, broken record!" });
    }
  };
  

  static editVinyl = async (
    req: CustomRequest<{ band: string; title: string; year: number }>,
    res: Response
  ) => {
    const { band, title, year } = req.body;
    const vinylRepository = AppDataSource.getRepository(Vinyls);

    try {
      const vinyl = await vinylRepository.findOne({
        where: { vinyl_id: parseInt(req.params.id) },
      });

      if (!vinyl) {
        return res.status(404).json({ message: "Vinyl Not Found!" });
      }

      console.log("Vinyl found:", vinyl); 

      vinyl.band = band || vinyl.band;
      vinyl.title = title || vinyl.title;
      vinyl.year = year || vinyl.year;

      const result = await vinylRepository.save(vinyl);

      res.status(200).json(result);
    } catch (err) {
      console.error("Error updating vinyl", err);
      res.status(500).json();
    }
  };

  static deleteVinyl = async (
    req: CustomRequest<{ bandName: string; title: string; year: number }>,
    res: Response
  ) => {
    try {
      const result = await AppDataSource.getRepository(Vinyls).delete(
        req.params.id
      );

      if (result.affected === 0) {
        return res.status(404).json({ message: "Vinyl Not Found" });
      }
      res.status(200).json();
    } catch (err) {
      console.error("Error breaking vinyl", err);
      res.status(500).json({ message: "Error breaking vinyl." });
    }
  };
}
